import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import { firestore } from "../services/firebaseService"
import ContentEditor from "../components/contentTemplate/contentEditor";

export default function Editor(){
    const router = useRouter();
    return(
        <div className={styles.editorPage} >
            <h1 className={styles.title}>Edit Your Portfolio</h1>
            <ContentEditor
            prompts={
                {title: "Portfolio Title", saveButton: "Save"}
            } onSave={(uploadData) => {
                firestore.collection("portfolios").doc("ammarRashidMalik").set(uploadData).then(() => {
                    router.push(process.env.NextBasePath + "/portfolios").then(console.log).catch(console.error)
                })}
            }/>
        </div>
    )
}
