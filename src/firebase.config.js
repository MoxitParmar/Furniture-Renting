import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGPZ56KNzQlsRX4XoH8Ax6zN0p0t3FIbA",
  authDomain: "maltimart-ff741.firebaseapp.com",
  projectId: "maltimart-ff741",
  storageBucket: "maltimart-ff741.appspot.com",
  messagingSenderId: "186880437017",
  appId: "1:186880437017:web:ca3fc9b4efad8890ac3388",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
