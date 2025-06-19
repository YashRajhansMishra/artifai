// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCItE3t2kPwlzGUFFA8XEvatDyVFXpdb9E",
  authDomain: "artifai-90538.firebaseapp.com",
  projectId: "artifai-90538",
  storageBucket: "artifai-90538.firebasestorage.app",
  messagingSenderId: "879208960118",
  appId: "1:879208960118:web:efb268bbf6b2b9ec9a0f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // Export Firestore instance
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
