import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

try{
    const firebaseConfig = {
        "apiKey": "AIzaSyAzZdvRGqujXe17ZKCQDx9146WvZ5et8O0",
        "authDomain": "ammarportfolioweb.firebaseapp.com",
        "databaseURL": "https://ammarportfolioweb-default-rtdb.asia-southeast1.firebasedatabase.app",
        "projectId": "ammarportfolioweb",
        "storageBucket": "ammarportfolioweb.appspot.com",
        "messagingSenderId": "947894610775",
        "appId": "1:947894610775:web:68a687b89b285bafceec12",
        "measurementId": "G-3WZYEMFQWQ"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}catch (e) {
    console.error(e)
}



// Initialize Cloud Firestore and get a reference to the service
const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database();

module.exports = { auth, firestore, database }

