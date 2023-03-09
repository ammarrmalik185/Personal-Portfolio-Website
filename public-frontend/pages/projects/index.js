import Head from 'next/head'
import { firestore } from "../../services/firebaseService";
import ProjectCard from '../../components/projectComponents/projectCard'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from "react";
import {Collapse} from "react-bootstrap";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [isInit, setIsInit] = useState(false);
  useEffect(() => {
    if(!isInit) {
      firestore.collection("projects").get().then((querySnapshot) => {
        let newPortfolios = [];
        querySnapshot.forEach((doc) => {
          newPortfolios.push({...doc.data(), id: doc.id})
        });
        setProjects(newPortfolios)
      });
      setIsInit(true);
    }
  }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to Projects
        </h1>
        <h2 className={styles.subTitle}>
            Projects that I have developed
        </h2>

        <div className="px-5 pt-4 pb-2">
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Recruitment</span>
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Branding</span>
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Workplace</span>
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Job Tips</span>
             <span className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">Contributors</span>
        </div>

          <Collapse className={styles.container} in={projects.length !== 0}>
            <div className={styles.projectsContainer}>
              {projects.sort().map((item) => {
                return(
                  <ProjectCard
                      title={item.title}
                      image={item.image}
                      author={item.user}
                      id={item.id}
                  />
                )
              })}
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
