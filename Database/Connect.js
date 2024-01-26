import firebase from "firebase";

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

const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp