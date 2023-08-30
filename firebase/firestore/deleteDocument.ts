import { db } from "../config";
import { doc, deleteDoc } from "firebase/firestore";

export default async function deleteDataEntry(
  collectionName: string,
  id: string
) {
  let result = null;
  let error = null;

  try {
    result = await deleteDoc(doc(db, collectionName, id));
  } catch (e) {
    error = e;
  }

  return { result, error };
}
