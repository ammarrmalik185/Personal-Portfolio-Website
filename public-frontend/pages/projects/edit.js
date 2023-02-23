import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import { auth, firestore } from "../../services/firebaseService";
import ContentEditor from "../../components/contentTemplate/contentEditor";
import {addDefaultData} from "../../services/defaultDocumentDataAdder";

export default function Editor(){
    const router = useRouter();
    auth.onAuthStateChanged(user => {
        if(user == null){
            router.push({
                pathname: "/projects",
            }).then(console.log).catch(console.error)
        }
    })
    return(
        <div className={styles.editorPage} >
            <h1 className={styles.title}>Publish your Project</h1>
            <ContentEditor prompts={{title: "Project Title", saveButton:"Save"}} onSave={(uploadData) => {
                uploadData = addDefaultData(uploadData);
                firestore.collection("projects").add(uploadData).then((savedData) => {
                    router.push({
                        pathname: "/projects/post",
                        query:{id: savedData.id}
                    }).then(console.log).catch(console.error)
                })}
            }/>
        </div>
    )
}
