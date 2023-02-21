import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { firestore } from "../services/firebaseService";
import CustomHtmlViewer from "../components/customHtmlTemplate/customHtmlViewer";
import { Collapse } from "react-bootstrap";
import { CurrentTheme } from "../styles/colorSchemes";

export default function Blogpost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState([])
    const [isInit, setIsInit] = useState(false);
    useEffect(() => {
        if(!isInit){
            firestore.collection("portfolios").doc("ammarRashidMalik").get().then(snapshot => {
                if (snapshot.exists) {
                    let data = snapshot.data();
                    setTitle(data.title);
                    setContent(data.content);
                    console.log("Document data:", data);

                } else {
                    console.log("No such document!");
                }
            })
            setIsInit(true);
        }

    })

    return (
        <Collapse className={styles.container} in={title !== ""} style={{backgroundColor: CurrentTheme.secondary}}>
            <main>
                <section>
                    <div className=''>
                        <div className={"font-montserrat font-bold text-[55px] text-center"}>
                            <h1 style={{color: CurrentTheme.text}} className={styles.title}>
                                {title}
                            </h1>
                        </div>
                    </div>
                </section>
                <section className='flex mt-3 w-full space-x-4'>

                    <div className='w-full px-4 py-4 leading-6 '>
                        <CustomHtmlViewer
                            contentBlocks={content.blocks || []}
                            title={content}
                        />

                    </div>

                </section>
            </main>
        </Collapse>
    )
}
