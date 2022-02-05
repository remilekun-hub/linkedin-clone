import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZEnpTfWxZwqIeFupjE-Sigh9xcP3v-WY",
  authDomain: "projext-92686.firebaseapp.com",
  databaseURL: "https://projext-92686-default-rtdb.firebaseio.com",
  projectId: "projext-92686",
  storageBucket: "projext-92686.appspot.com",
  messagingSenderId: "217464400951",
  appId: "1:217464400951:web:3e5c42726cb456107ba3b2",
  measurementId: "G-2VBYC9YWHE"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };