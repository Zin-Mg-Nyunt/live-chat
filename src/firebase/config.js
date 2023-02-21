import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYBBwhvf1AbEZxpS6l4L0g2ZOs21u92Ls",
    authDomain: "vue-blog-system-ecafe.firebaseapp.com",
    projectId: "vue-blog-system-ecafe",
    storageBucket: "vue-blog-system-ecafe.appspot.com",
    messagingSenderId: "243344461330",
    appId: "1:243344461330:web:c89b2052b24d3492f5d2cb"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, timestamp}