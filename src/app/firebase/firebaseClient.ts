
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7ueToYZPY8lqlEbwXkIEAILbNdZohhSQ",
  authDomain: "my-escape-room.firebaseapp.com",
  projectId: "my-escape-room",
  storageBucket: "my-escape-room.firebasestorage.app",
  messagingSenderId: "172638048019",
  appId: "1:172638048019:web:01a985848ca9902f98d4e6"
};;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, auth, db};

export class DB {
  static create = async (path: string, input: any) => {
    await addDoc(collection(db, path), {
      input,
    });
  }

  static getById = async (path: string, id: string) => {
    await getDoc(doc(db, path, id))
  }

  static get = async (path: string) => {
    await getDocs(collection(db, path));
  }

  static update = async (path: string, id: string, input: any) => {
    await updateDoc(doc(db, path, id), {
      input
    })
  }

  static delete = async (path: string, id: string) => {
    await deleteDoc(doc(db, path, id));
  }
}