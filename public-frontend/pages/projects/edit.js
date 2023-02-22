import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import { firestore } from "../../services/firebaseService";
import ContentEditor from "../../components/contentTemplate/contentEditor";

export default function Editor(){
    const router = useRouter();
     return(
        <div className={styles.editorPage} >
            <h1 className={styles.title}>Publish your Project</h1>
            <ContentEditor prompts={{title: "Project Title", saveButton:"Save"}} onSave={(uploadData) => {
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
