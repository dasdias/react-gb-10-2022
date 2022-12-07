// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdydKPInlzO9zYbyteJO5VO5po2MpGPzc",
  authDomain: "gbreact-22e8f.firebaseapp.com",
  databaseURL: "https://gbreact-22e8f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gbreact-22e8f",
  storageBucket: "gbreact-22e8f.appspot.com",
  messagingSenderId: "832368426565",
  appId: "1:832368426565:web:70960e67d0720806b6ed2c",
  measurementId: "G-0ZQN83FTBC"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
// const analytics = getAnalytics(app);