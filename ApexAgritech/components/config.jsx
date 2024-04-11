// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUZcTw6vRpwGcE7Ru7M419gIZkj4zA8a4",
  authDomain: "apexagritech-904b1.firebaseapp.com",
  databaseURL: "https://apexagritech-904b1-default-rtdb.firebaseio.com",
  projectId: "apexagritech-904b1",
  storageBucket: "apexagritech-904b1.appspot.com",
  messagingSenderId: "342947923025",
  appId: "1:342947923025:web:730f6830de19579d5ea470",
  measurementId: "G-GM5K2TMN7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//init database and export
export const db = getDatabase(app);