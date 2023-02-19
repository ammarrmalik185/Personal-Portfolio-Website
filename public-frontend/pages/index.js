import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {VscSearch} from 'react-icons/vsc';
import {useEffect, useState} from "react";
import axios from "../services/axiosService";
import CustomHtmlViewer from "../components/customHtmlTemplate/customHtmlViewer";
import BlogCard from "../components/blogComponents/blogCard";

export default function Blogpost() {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogAuthor, setBlogAuthor] = useState("");
    const [blogContent, setBlogContent] = useState([])
    const [isInit, setIsInit] = useState(false);
    useEffect(() => {
        if(!isInit){
            axios.get("/portfolio/ammarRashidMalik").then(rawData => {
                let data = rawData.data.data;
                setBlogAuthor(data.blogAuthor);
                setBlogTitle(data.title);
                setBlogContent(data.content);
            }).catch(console.error)
            setIsInit(true);
        }

    })

    return (
        <div className={styles.container}>
            <main className='mx-20 px-10'>
                <section className='mt-3'>
                    <div className=''>
                        <div className={"font-montserrat font-bold text-[55px] text-center"}>
                            <h1 className={"text-4xl"}>
                                {blogTitle}
                            </h1>
                        </div>
                    </div>
                </section>
                <section className='flex mt-3 w-full space-x-4'>

                    <div className='w-full px-4 py-4 leading-6 '>
                        <CustomHtmlViewer
                            contentBlocks={blogContent.blocks || []}
                            title={blogTitle}
                        />

                    </div>

                </section>
            </main>
        </div>
    )
}
