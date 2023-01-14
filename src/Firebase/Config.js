// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8AZWGf5TcPEaelaYDEbQX_YdIzrbm2_c",
  authDomain: "photoshop-3c283.firebaseapp.com",
  projectId: "photoshop-3c283",
  storageBucket: "photoshop-3c283.appspot.com",
  messagingSenderId: "124904094980",
  appId: "1:124904094980:web:1ff779f335589d89b66451",
  measurementId: "G-25N8X3E08V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();