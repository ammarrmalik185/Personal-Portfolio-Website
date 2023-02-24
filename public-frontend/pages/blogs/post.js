import { firestore } from "../../services/firebaseService";
import Image from 'next/image'
import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css'
import {VscSearch} from 'react-icons/vsc';
import {useEffect, useState} from "react";
import CustomHtmlViewer from "../../components/customHtmlTemplate/customHtmlViewer";
import BlogCard from "../../components/blogComponents/blogCard";
import AuthorDetails from "../../components/globalComponents/AuthorDetails";

export default function Blogpost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState([])
    const [isInit, setIsInit] = useState(false);
    const Router = useRouter();
    useEffect(() => {
        if(!isInit){
            if (Router.query.id) {
                if(isInit) return;
                firestore.collection("blogs").doc(Router.query.id).get().then(snapshot => {
                    if (snapshot.exists) {
                        let data = snapshot.data();
                        setTitle(data.title);
                        setAuthor(data.author);
                        setContent(data.content.blocks);
                    } else {
                        Router.push("/blogs").then(console.log).catch(console.error);
                    }
                })
                setIsInit(true);
            } else {
                Router.push("/blogs").then(console.log).catch(console.error);
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

                        <div>
                            <p className='font-montserrat font-bold text-center text-[40px] my-8 text-[#253D4E]'>
                                Related Posts
                            </p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <BlogCard title="Test" description="Lmao" id="79lP697b31V7rdtqpY8C" image="sunset.jpg"/>
                            <BlogCard title="Test" description="Lmao" id="79lP697b31V7rdtqpY8C" image="sunset.jpg"/>
                            <BlogCard title="Test" description="Lmao" id="79lP697b31V7rdtqpY8C" image="sunset.jpg"/>
                        </div>

                    </div>


                    <div className='w-1/3 px-4 py-4 space-y-12'>
                        <div className='px-2 py-2 border shadow-md rounded-lg flex items-center space-x-2'>
                            <VscSearch/>
                            <input type="text" placeholder='Search'/>
                        </div>

                        <AuthorDetails userId={"Lyc9SMw7dGPhtkbHMw8QADWgmFc2"}/>

                        <div className='px-4 py-4 bg-[#f3fbfb] shadow-md border-blue-300'>
                            <div className=''>
                                <p className='text-[#1F2938] font-bold font-montserrat text-[22px]'>Catagory</p>
                                <div className='w-full border border-black'></div>
                            </div>


                            <div className='justify-between flex px-2 py-2 border-b-2 items-center'>
                                <p>Recruitment News</p>
                                <p className='px-2 py-1 rounded-lg border bg-[#EDEDEE]'> 28</p>
                            </div>

                            <div className='justify-between flex px-2 py-2 border-b-2 items-center'>
                                <p>Job Venues</p>
                                <p className='px-2 py-1 rounded-lg border bg-[#EDEDEE]'> 28</p>
                            </div>

                            <div className='justify-between flex px-2 py-2 border-b-2 items-center'>
                                <p>Job Tools</p>
                                <p className='px-2 py-1 rounded-lg border bg-[#EDEDEE]'> 28</p>
                            </div>

                            <div className='justify-between flex px-2 py-2 border-b-2 items-center'>
                                <p>Full Time Job</p>
                                <p className='px-2 py-1 rounded-lg border bg-[#EDEDEE]'> 28</p>
                            </div>

                        </div>


                        {/* Popular tags */}
                        <div className='px-4 py-4 rounded-lg border border-gray-400 shadow-md'>
                            <div className=''>
                                <p className='text-[#1F2938] font-bold font-montserrat text-[22px]'>Popular Tags</p>
                                <div className='w-full border border-blue'></div>
                            </div>
                            <div className='font-sans text-[14px] font-normal text-[#727272]'>
                                <p className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 mr-3 mt-2">Figma</p>
                                <p className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 mr-3 mt-2">Adobe XD</p>
                                <p className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 mr-3 mt-2">PSD</p>
                            </div>

                            <div className='font-sans text-[14px] font-normal text-[#727272]'>
                                <p className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 mr-3 mt-2">Employer</p>
                                <p className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 mr-3 mt-2">Recruiting</p>
                                <p className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 mr-3 mt-2">Work</p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
