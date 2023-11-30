import app from "../firebase-config";
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";


const db = getFirestore(app);
const bookCollectionRef = collection(db, "books");
const userCollectionRef = collection(db, "users");
const composeCollectionRef = collection(db, "composters");

class BookDataService {

  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

class UserDataService {

  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };

  getUserByUID = (uid) => {
    const q = query(userCollectionRef, where('uid', '==', uid));
    return getDocs(q);
  };
}

class ComposterDataService {
   
  addComposter = (newComposter) => {
    return addDoc(composeCollectionRef, newComposter);
  }

  updateComposter = (id, updatedComposter) => {
    const composterDoc = doc(db, "composters", id);
    return updateDoc(composterDoc, updatedComposter);
  }

  deleteComposter = (id) => {
    const composterDoc = doc(db, "composters", id);
    return deleteDoc(composterDoc);
  }

  getAllComposters = () => {
    return getDocs(composeCollectionRef);
  }

  getComposter = (id) => {

    const composterDoc = doc(db, "composters", id);
    return getDoc(composterDoc);
  }

}

const bookDataService = new BookDataService();
const userDataService = new UserDataService();
const composterDataService = new ComposterDataService();

export { bookDataService, userDataService, composterDataService };