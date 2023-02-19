import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import axios from "../../services/axiosService";
import CustomHtmlViewer from "../../components/customHtmlTemplate/customHtmlViewer";
import {useState} from "react";
import ContentEditor from "../../components/contentTemplate/contentEditor";

export default function Editor(){
    const router = useRouter();
     return(
        <div className={styles.editorPage} >
            <h1 className={styles.title}>Create Your Blog</h1>
            <ContentEditor onSave={(uploadData) => {
                    axios.post('/portfolio', uploadData).then(() => {
                        router.push("/portfolio").then(console.log).catch(console.error)
                    })
                }
            }/>
        </div>
    )
}
