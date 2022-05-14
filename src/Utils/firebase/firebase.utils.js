import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXDVjAKc04shpKuBDaWuOhe3kpiCELVUk",
  authDomain: "ecommerce-db-64ed5.firebaseapp.com",
  projectId: "ecommerce-db-64ed5",
  storageBucket: "ecommerce-db-64ed5.appspot.com",
  messagingSenderId: "146590878997",
  appId: "1:146590878997:web:ff2ea31c89d93115e52d1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

//Create user document and users collection
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email, photoUrl } = userAuth.reloadUserInfo;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoUrl,
        createdDate: createdAt,
      });
    } catch (error) {
      console.log("Error in creation of user by setDoc", error.message);
    }
  } 
  return userDocRef;
};
