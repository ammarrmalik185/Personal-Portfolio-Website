import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import {auth, firestore} from "../services/firebaseService"
import ContentEditor from "../components/contentTemplate/contentEditor";
import { addDefaultData } from "../services/defaultDocumentDataAdder";
const staticData = require("../staticData.json");

export default function Editor(){
    const router = useRouter();
    auth.onAuthStateChanged(user => {
        if(user == null || !staticData.adminData.adminIds.includes(user.uid)){
            router.push({
                pathname: "/",
            }).then(console.log).catch(console.error)
        }
    })
    return(
        <div className={styles.editorPage} >
            <h1 className={styles.title}>Edit Your Portfolio</h1>
            <ContentEditor
            prompts={
                {title: "Portfolio Title", saveButton: "Save"}
            } onSave={(uploadData) => {
                uploadData = addDefaultData(uploadData);
                firestore.collection("portfolios").doc("ammarRashidMalik").set(uploadData).then(() => {
                    router.push("/Personal-Portfolio-Website").then(console.log).catch(console.error)
                })
            }}/>
        </div>
    )
}
