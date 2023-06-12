// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyCpkE8w4RYPaM2EPVst5whFicmXOGseU10",
  authDomain: "notes-ca94d.firebaseapp.com",
  projectId: "notes-ca94d",
  storageBucket: "notes-ca94d.appspot.com",
  messagingSenderId: "429146851630",
  appId: "1:429146851630:web:343e42ccd8cb4df7d712bf",
  measurementId: "G-T5B9W7SD11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);