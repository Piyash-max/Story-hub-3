import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDG9d6GtFw6MJVrPdbHxwBhhbw_RdIt6m0",
  authDomain: "willy-c743c.firebaseapp.com",
  projectId: "willy-c743c",
  storageBucket: "willy-c743c.appspot.com",
  messagingSenderId: "745487552367",
  appId: "1:745487552367:web:23841ea985654a2ae8229a"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   