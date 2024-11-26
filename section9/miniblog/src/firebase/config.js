// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzHF9TWlM9u2ohXP1Lha27UUAxuXUqB-E",
  authDomain: "miniblog-8d432.firebaseapp.com",
  projectId: "miniblog-8d432",
  storageBucket: "miniblog-8d432.firebasestorage.app",
  messagingSenderId: "229630284240",
  appId: "1:229630284240:web:535a77236c4fd0dedbe9d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };