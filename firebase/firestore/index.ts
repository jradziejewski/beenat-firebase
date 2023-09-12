import { EventItem, UserData } from "@/types";
import { db } from "../config";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export async function addData(collectionName: string, data: EventItem) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(db, collectionName), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getUserData(uid: string): Promise<UserData> {
  let result = null;

  const docRef = doc(db, "users", uid);

  try {
    result = await getDoc(docRef);
  } catch (e) {
    console.log(e);
  }

  result = result?.data();

  const userData: UserData = {
    id: result?.uid,
    email: result?.email,
    username: result?.username,
    event_ids: result?.event_ids,
  };

  return userData;
}

export async function getDocument(collectionName: string) {
  let result = null;
  let error = null;

  try {
    result = await getDocs(collection(db, collectionName));
  } catch (e) {
    error = e;
  }

  const resultArr: Array<EventItem> = [];

  result?.forEach((doc) => {
    resultArr.push({ ...doc.data() } as EventItem);
  });

  return { resultArr, error };
}

export async function deleteDataEntry(collectionName: string, id: string) {
  let result = null;
  let error = null;

  try {
    result = await deleteDoc(doc(db, collectionName, id));
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function pushEventToUserCollection(event_id: string, uid: string) {
  const docRef = doc(db, "users", uid);

  await updateDoc(docRef, {
    event_ids: arrayUnion(event_id),
  });
}
