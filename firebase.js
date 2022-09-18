// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUzekU-QgjiG72nyWTLg2EE5kAyYYcoHs",
  authDomain: "uberclone-4c95d.firebaseapp.com",
  projectId: "uberclone-4c95d",
  storageBucket: "uberclone-4c95d.appspot.com",
  messagingSenderId: "1009794618244",
  appId: "1:1009794618244:web:0c2d3a08d4016ec9f183d1",
  measurementId: "G-FPV87MK31K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth()
export {app,provider,auth}