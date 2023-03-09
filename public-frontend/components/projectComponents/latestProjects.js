import styles from "../../styles/Home.module.css";
import ProjectCard from "./projectCard";
import {useEffect, useState} from "react";
import {firestore} from "../../services/firebaseService";


export function LatestProjects(){
    const [projects, setProjects] = useState([]);
    const [isInit, setIsInit] = useState(false);
    useEffect(() => {
        if(!isInit) {
            firestore.collection("projects").limit(3).get().then((querySnapshot) => {
                let newProjects = [];
                querySnapshot.forEach((doc) => {
                    newProjects.push({...doc.data(), id: doc.id})
                });
                setProjects(newProjects)
            });
            setIsInit(true);
        }
    }, [])
    return(<div>
        {projects && <div>
            <div>
                <p className={styles.title}>
                    Latest Projects
                </p>
            </div>
            <div className={styles.projectsContainer}>
                {projects.map(portfolio => <ProjectCard title={portfolio.title} author={portfolio.user} image={portfolio.image} id={portfolio.id}/>)}
            </div>
        </div>}
    </div>);
}
