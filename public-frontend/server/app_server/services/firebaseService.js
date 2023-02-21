const admin = require("firebase-admin");

const serviceAccount = require("../private/firebaseAdmin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ammarportfolioweb-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const auth = admin.auth();
const firestore = admin.firestore();
const database = admin.database();
const storage = admin.storage();

module.exports = { app: admin, firestore, auth, storage, database };
