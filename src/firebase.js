import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
