import { doc, getDoc, setDoc } from "firebase/firestore";
import { users as usersCollectionName } from "../../shared/constants/firebase-collection";
import { db } from "./initialize";

export const getUser = async (userId) => {
  const docRef = doc(db, usersCollectionName, userId);
  const user = await getDoc(docRef);
  return { id: user.id, ...user.data() };
};

export const addUser = async (
  userId,
  { firstName = "", lastName = "", experiences = [] }
) => {
  const docRef = doc(db, usersCollectionName, userId);
  await setDoc(docRef, { firstName, lastName, experiences });
};

export const updateUser = async (
  userId,
  { firstName, lastName, experiences }
) => {
  const docRef = doc(db, usersCollectionName, userId);
  await setDoc(docRef, { firstName, lastName, experiences });
};
