import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { users as usersCollectionName } from "../../shared/constants/firebase-collection";
import { db } from "./initialize";

const getPostsCollection = () => {
  return collection(db, usersCollectionName);
};

export const getUser = async () => {
  const querySnapshot = await getDocs(getPostsCollection());

  let posts = [];

  querySnapshot.forEach((doc) => {
    posts.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return posts;
};

export const addUser = async (userId, firstName, lastName) => {
  const docRef = doc(db, usersCollectionName, userId);
  const addedUser = await setDoc(docRef, { firstName, lastName });
  console.log(addedUser);

  return addedUser;
};

export const deleteUser = async (id) => {
  const docToBeDeleted = doc(db, usersCollectionName, id);
  await deleteDoc(docToBeDeleted);
};
