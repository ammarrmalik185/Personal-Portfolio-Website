import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import ContentEditor from "../../components/contentTemplate/contentEditor";
import {auth, firestore} from "../../services/firebaseService";

export default function PortfolioEditor(){
    const router = useRouter();
     return(
        <div className={styles.editorPage} >
            <h1 className={styles.title}>Create Your Blog</h1>
            <ContentEditor prompts={{title: "Portfolio Title", saveButton:"Save"}} onSave={(uploadData) => {
                firestore.collection("portfolios").doc(auth.currentUser.uid).set(uploadData).then(() => {
                    router.push({
                        pathname: "/portfolios/post",
                        query:{id: auth.currentUser.uid}
                    }).then(console.log).catch(console.error)
                })}
            }/>
        </div>
    )
}
