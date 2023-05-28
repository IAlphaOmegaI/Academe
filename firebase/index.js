// import * as firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8SI0IxSDFEL57x885keG9PvV23ejgzio",
  authDomain: "academe-d4e80.firebaseapp.com",
  projectId: "academe-d4e80",
  storageBucket: "academe-d4e80.appspot.com",
  messagingSenderId: "373721011248",
  appId: "1:373721011248:web:fa750af10b487d3a46c9f5",
  measurementId: "G-X4Y3CVZCB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// if (analytics.isSupported()) {
//   const analytics = getAnalytics(app);
// }

export { db };
