import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCr4lucxNjWC_8N02xCuMstiIkFZKAqObQ",
    authDomain: "live-chat-7bc8e.firebaseapp.com",
    projectId: "live-chat-7bc8e",
    storageBucket: "live-chat-7bc8e.firebasestorage.app",
    messagingSenderId: "193111320764",
    appId: "1:193111320764:web:82e32e09dfb01112fa88b9"
};
  
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let auth = firebase.auth();

export { db, timestamp, auth };