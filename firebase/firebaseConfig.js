// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcQfLuFSrad-VAnpYjczK3QHqsWMiHAeQ",
  authDomain: "fa22-onboarding.firebaseapp.com",
  projectId: "fa22-onboarding",
  storageBucket: "fa22-onboarding.appspot.com",
  messagingSenderId: "525892236929",
  appId: "1:525892236929:web:4d657aa48e971a6a4abf80",
  measurementId: "G-BHBW9E09B3"
};

let analytics, db;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  db = getFirestore();
}

export { db, analytics }