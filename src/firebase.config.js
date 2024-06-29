// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0aJjXjX7pNyHwytd3S7tj67LMNo-Lhms",
  authDomain: "furniture-renting-e6415.firebaseapp.com",
  projectId: "furniture-renting-e6415",
  storageBucket: "furniture-renting-e6415.appspot.com",
  messagingSenderId: "944293200972",
  appId: "1:944293200972:web:d8118ec63fa5efc30ba0e9",
  measurementId: "G-PDPN3QK7W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;