const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.get('/', (req, res) => res.send("Hello World!"));

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.api = functions.https.onRequest(app);
