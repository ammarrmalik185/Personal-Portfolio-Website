import Head from 'next/head'
import axios from "../../services/axiosService";
import Image from 'next/image'
import LatestBlogPost from '../../components/blogComponents/bigBlogPost'
import BlogCard from '../../components/blogComponents/blogCard'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from "react";
import {CurrentTheme} from "../../styles/colorSchemes";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("/blog").then(data => {
      let array = data.data.data
      console.log(array)
      array.reverse();
      setBlogs(array)
    })
  }, [])
  return (
    <div className={styles.container} style={{backgroundColor: CurrentTheme.secondary}}>
       <main className={styles.main}>
        <h1 className={styles.title}>
          Here are the blogs written by me
        </h1>

        <div className="px-5 pt-4 pb-2">
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Recruitment</span>
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Branding</span>
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Workplace</span>
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Job Tips</span>
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Contributors</span>
        </div>

        {/*<div className='grid grid-cols-2 justify-between gap-3'>*/}
        {/*  <LatestBlogPost />*/}
        {/*  <LatestBlogPost />*/}
        {/*</div>*/}

        <div className="grid grid-cols-3 gap-3">
          {blogs.sort().map((item) => {
            return(
                <div className='mt-5' key={item.id}>
                  <BlogCard
                      title={item.blogTitle}
                      image="sunset.jpg"
                      description={"by: " + item.blogAuthor}
                      id={item.id}
                  ></BlogCard>
                </div>
            )
          })}
        </div>

        {/* page number slider  */}

        {/*<div className="flex justify-center mt-8">*/}
        {/*  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">1</div>*/}
        {/*  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">2</div>*/}
        {/*  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">3</div>*/}
        {/*  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">4</div>*/}
        {/*  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">5</div>*/}
        {/*  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">6</div>*/}

        {/*</div>*/}

        {/* name of companies */}

      </main>
    </div>
  )
}
