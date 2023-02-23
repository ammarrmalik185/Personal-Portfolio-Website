import { auth } from "./firebaseService";

export function addDefaultData(obj) {

    obj.views = 0;
    obj.date = Date.now()
    obj.user = auth.currentUser.uid;

    return obj;
}
