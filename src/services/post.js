import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { posts as postsCollectionName } from "../constants/firebase-collection";
import { db } from "../firebase";

const getPostsCollection = () => {
  return collection(db, postsCollectionName);
};

export const getPosts = async () => {
  const querySnapshot = await getDocs(getPostsCollection());

  let posts = [];

  querySnapshot.forEach((doc) => {
    posts.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  console.log(posts);

  return posts;
};

export const addPost = async (body) => {
  const addedPost = await addDoc(getPostsCollection(), body);

  return addedPost;
};

export const deletePost = async (id) => {
  const docToBeDeleted = doc(db, postsCollectionName, id);
  await deleteDoc(docToBeDeleted);
};
