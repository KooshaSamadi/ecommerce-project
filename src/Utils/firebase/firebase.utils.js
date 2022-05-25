import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const providerId = await userAuth.providerData[0].providerId;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,

        photoURL,
        email,
        providerId,
        createdDate: createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error in creation of user by setDoc", error.message);
    }
  }
  return userDocRef;
};

//Native provider by email/password
export const createUserDocumentFromEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signUsernWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return error;
  }
};
