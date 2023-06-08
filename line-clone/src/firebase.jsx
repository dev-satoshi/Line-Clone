import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCbtBWQ7xMrmYdgIb94dswBmP-hvLMp4HQ",
  authDomain: "line-clone-88b81.firebaseapp.com",
  projectId: "line-clone-88b81",
  storageBucket: "line-clone-88b81.appspot.com",
  messagingSenderId: "574840552088",
  appId: "1:574840552088:web:c20c01f2c48d752b7e2eed",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
