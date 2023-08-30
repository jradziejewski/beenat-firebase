import firebase_app, { db } from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    return setDoc(
      doc(db, "users", cred.user.uid),
      {
        uid: cred.user.uid,
        events: [],
        username: cred.user.email.split("@")[0],
      },
      cred.user.uid
    );
  });
}
