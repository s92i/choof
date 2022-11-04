import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9MsMUH0p3HBqSCJWnSm0CjQMpgWsZ8aY",
    authDomain: "choof-f8402.firebaseapp.com",
    projectId: "choof-f8402",
    storageBucket: "choof-f8402.appspot.com",
    messagingSenderId: "734217597655",
    appId: "1:734217597655:web:d6443dd0a4de7f515ab692",
    measurementId: "G-JHD1JPY3QV"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = app.auth()

export { auth, db }