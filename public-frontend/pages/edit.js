import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import axios from "../services/axiosService";
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
                axios.put('/portfolio/ammarRashidMalik', uploadData).then(() => {
                    router.push("/").then(console.log).catch(console.error)
                })
            }}/>
        </div>
    )
}
