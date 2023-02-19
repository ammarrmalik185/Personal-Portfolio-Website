import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import axios from "../../services/axiosService";
import ContentEditor from "../../components/contentTemplate/contentEditor";

export default function Editor(){
    const router = useRouter();
     return(
        <div className={styles.editorPage} >
            <h1 className={styles.title}>Publish your Project</h1>
            <ContentEditor
                prompts={{title:"Project Title", saveButton:"Publish"}}
                onSave={(uploadData) => {
                    axios.post('/project', uploadData).then(() => {
                        router.push("/project").then(console.log).catch(console.error)
                    })
                }
            }/>
        </div>
    )
}
