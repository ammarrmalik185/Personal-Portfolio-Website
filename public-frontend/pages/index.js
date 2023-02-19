import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import axios from "../services/axiosService";
import CustomHtmlViewer from "../components/customHtmlTemplate/customHtmlViewer";
import {Collapse} from "react-bootstrap";
import { CurrentTheme } from "../styles/colorSchemes";

export default function Blogpost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState([])
    const [isInit, setIsInit] = useState(false);
    useEffect(() => {
        if(!isInit){
            axios.get("/portfolio/ammarRashidMalik").then(rawData => {
                let data = rawData.data.data;
                setTitle(data.title);
                setContent(data.content);
            }).catch(console.error)
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
