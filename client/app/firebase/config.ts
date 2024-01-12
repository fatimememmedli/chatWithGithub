// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjNu_0YPDZLL3w0fnvpw6gLX-fsJ_WM6A",
  authDomain: "bf203-3fb49.firebaseapp.com",
  databaseURL: "https://bf203-3fb49-default-rtdb.firebaseio.com",
  projectId: "bf203-3fb49",
  storageBucket: "bf203-3fb49.appspot.com",
  messagingSenderId: "960673371012",
  appId: "1:960673371012:web:f94dd8b61b0fa5f01f43d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
