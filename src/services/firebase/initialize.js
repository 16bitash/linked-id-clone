import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLnhDOb2EKyJLCOLSbHoIaxBTfCBO3G44",
  authDomain: "linked-in-clone-67794.firebaseapp.com",
  projectId: "linked-in-clone-67794",
  storageBucket: "linked-in-clone-67794.appspot.com",
  messagingSenderId: "608740611058",
  appId: "1:608740611058:web:beeef4686ce3914e59d16b",
  measurementId: "G-3ZMCJE5W53",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
