import styles from "../../styles/Home.module.css";
import BlogCard from "./blogCard";
import {useEffect, useState} from "react";
import {firestore} from "../../services/firebaseService";


export function LatestBlogs(){
    const [blogs, setBlogs] = useState([]);
    const [isInit, setIsInit] = useState(false);
    useEffect(() => {
        if(!isInit) {
            firestore.collection("blogs").limit(3).get().then((querySnapshot) => {
                let newBlogs = [];
                querySnapshot.forEach((doc) => {
                    newBlogs.push({...doc.data(), id: doc.id})
                });
                setBlogs(newBlogs)
            });
            setIsInit(true);
        }
    }, [])
    return(<div>
        {blogs && <div>
            <div>
                <p className={styles.title}>
                    Latest Blogs
                </p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {blogs.map(blog => <BlogCard title={blog.title} author={blog.user} image={blog.image} id={blog.id}/>)}
            </div>
        </div>}
    </div>);
}
