import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

try{
    firebase.initializeApp(require("../env/staticData.json").firebaseConfig);
}catch (e) {
    console.error(e)
}

// Initialize Cloud Firestore and get a reference to the service
const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database();
const storage = firebase.database();

module.exports = { auth, firestore, database, storage }

