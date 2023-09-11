import firebase_app, { db } from "../config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const auth = getAuth(firebase_app);

export async function logOut() {
  let result = null,
    error = null;

  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signIn(email, password) {
  let result = null,
    error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signUp(email, username, password) {
  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    return setDoc(
      doc(db, "users", cred.user.uid),
      {
        uid: cred.user.uid,
        events: [],
        username: username,
      },
      cred.user.uid
    );
  });
}
