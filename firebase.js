// // Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDXK_FaXI3BnqrQqlxag-MjJMbgmigtKnc",
//   authDomain: "project2566-793b1.firebaseapp.com",
//   databaseURL: "https://project2566-793b1-default-rtdb.firebaseio.com",
//   projectId: "project2566-793b1",
//   storageBucket: "project2566-793b1.appspot.com",
//   messagingSenderId: "153207060087",
//   appId: "1:153207060087:web:4fba306375b1d3fc72b872",
//   measurementId: "G-967LH18BFL"
// };

// // Use this to initialize the firebase App
// const firebaseApp =firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXK_FaXI3BnqrQqlxag-MjJMbgmigtKnc",
    authDomain: "project2566-793b1.firebaseapp.com",
    databaseURL: "https://project2566-793b1-default-rtdb.firebaseio.com",
    projectId: "project2566-793b1",
    storageBucket: "project2566-793b1.appspot.com",
    messagingSenderId: "153207060087",
    appId: "1:153207060087:web:4fba306375b1d3fc72b872",
    measurementId: "G-967LH18BFL"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
