import { db } from "../config";
import { EventItem } from "@/types";
import { getDocs, collection } from "firebase/firestore";

export default async function getDocument(collectionName: string) {
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
