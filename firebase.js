import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCm7lTJ7MMKR1jJVRbkq_tRo7Ms9ZY1r9U",
  authDomain: "growcalth-ios.firebaseapp.com",
  projectId: "growcalth-ios",
  storageBucket: "growcalth-ios.appspot.com",
  messagingSenderId: "626848273230",
  appId: "1:626848273230:web:29f17579aa24447d9dc41f",
  measurementId: "G-8FFPP4MF8V"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth, db, firebase };