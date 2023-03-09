import { firestore } from "../../services/firebaseService";
import BlogCard from '../../components/blogComponents/blogCard'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from "react";
import {Collapse} from "react-bootstrap";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isInit, setIsInit] = useState(false);
  useEffect(() => {
      if(!isInit) {
          firestore.collection("blogs").get().then((querySnapshot) => {
              let newBlogs = [];
              querySnapshot.forEach((doc) => {
                  newBlogs.push({...doc.data(), id: doc.id})
              });
              setBlogs(newBlogs)
          });
          setIsInit(true);
      }
  }, [])
  return (
    <div className={styles.container}>
       <main className={styles.main}>
           <h1 className={styles.title}>
               Welcome to Blogs
           </h1>
           <h2 className={styles.subTitle}>
               Here are the blogs written by me
           </h2>
           <div className="px-5 pt-4 pb-2">
               <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Recruitment</span>
               <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Branding</span>
               <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Workplace</span>
               <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Job Tips</span>
               <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Contributors</span>
           </div>

           <Collapse className={styles.container} in={blogs.length !== 0}>
               <div className="grid grid-cols-3 gap-3">
                  {blogs.sort().map((item) => {
                    return(
                        <div className='mt-5' key={item.id}>
                          <BlogCard
                              title={item.title}
                              image={item.image}
                              author={item.user}
                              id={item.id}
                          />
                        </div>
                    )})}
               </div>
           </Collapse>

           <div className="flex justify-center mt-8">
               <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">1</div>
               <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">2</div>
               <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">3</div>
               <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">4</div>
               <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">5</div>
               <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">6</div>
           </div>

      </main>
    </div>
  )
}
