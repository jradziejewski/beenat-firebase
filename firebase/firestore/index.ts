import { EventItem } from "@/types";
import { db } from "../config";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
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
    resultArr.push({ id: doc.id, ...doc.data() } as EventItem);
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
