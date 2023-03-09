import { firestore } from "../../services/firebaseService";
import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css'
import {useEffect, useState} from "react";
import CustomHtmlViewer from "../../components/customHtmlTemplate/customHtmlViewer";
import AuthorDetails from "../../components/globalComponents/AuthorDetails";
import PopularTags from "../../components/globalComponents/PopularTags";
import {LatestPortfolios} from "../../components/portfolioComponents/lastestPortfolios";

export default function PortfolioSingle() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState([])
    const [tags, setTags] = useState([])
    const [isInit, setIsInit] = useState(false);
    const Router = useRouter();
    useEffect(() => {
        if(!isInit){
            if (Router.query.id) {
                if(isInit) return;
                firestore.collection("portfolios").doc(Router.query.id).get().then(snapshot => {
                    if (snapshot.exists) {
                        let data = snapshot.data();
                        setTitle(data.title);
                        setContent(data.content.blocks);
                        setAuthor(data.user)
                        setTags(data.tags.split(" ").filter(v => v.trim() !== ""))
                    } else {
                        Router.push("/portfolios").then(console.log).catch(console.error);
                    }
                })
                setIsInit(true);
            } else {
                Router.push("/portfolios").then(console.log).catch(console.error);
            }
        }
    })

    return (
        <div className={styles.container}>
            <main>
                <section>
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                </section>
                <section className='flex mt-3 w-full space-x-4'>

                    <div className='w-full lg:w-2/3 px-4 py-4 leading-6 '>
                        <CustomHtmlViewer
                            contentBlocks={content}
                        />

                        <LatestPortfolios/>

                    </div>

                    <div className='w-1/3 px-4 py-4 space-y-12'>

                        {author && <AuthorDetails userId={author}/>}

                        {tags.length > 0 && <PopularTags tags={tags}/>}

                    </div>

                </section>
            </main>
        </div>
    )
}
