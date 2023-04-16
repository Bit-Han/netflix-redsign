// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCwH2ey__HP8eIJ8f_L1LCosQ18iLC241E",
	authDomain: "netflix-redesign-clone.firebaseapp.com",
	projectId: "netflix-redesign-clone",
	storageBucket: "netflix-redesign-clone.appspot.com",
	messagingSenderId: "920525828216",
	appId: "1:920525828216:web:30d6023939556a033c7d8d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;

export { auth, db };
