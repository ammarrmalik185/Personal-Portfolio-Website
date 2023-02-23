const firebase = require("../services/firebaseService");

function loggedInUser(req, res, next) {
    if (!req.headers.authorization){
        let err = new Error("No authorization header");
        err.code = 403
        next(err)
        return;
    }
    firebase.auth.verifyIdToken(req.headers.authorization.replace("Bearer ", "")).then(function (decodedToken) {
        req.user = decodedToken;
        next();
    }).catch(err => {
        err.code = 403
        next(err)
    })
}

function loggedInAdmin(req, res, next) {
    loggedInUser(req, res, () => {
        if (req.user.admin) {
            next();
        }else{
            let err = new Error("Not an admin");
            err.code = 403
            next(err)
        }
    });
}

module.exports = { loggedInUser, loggedInAdmin }
