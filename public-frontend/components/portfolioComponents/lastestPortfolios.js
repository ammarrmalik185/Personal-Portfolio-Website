import styles from "../../styles/Home.module.css";
import PortfolioCard from "./portfolioCard";
import {useEffect, useState} from "react";
import {firestore} from "../../services/firebaseService";


export function LatestPortfolios(){
    const [portfolios, setPortfolios] = useState([]);
    const [isInit, setIsInit] = useState(false);
    useEffect(() => {
        if(!isInit) {
            firestore.collection("portfolios").limit(3).get().then((querySnapshot) => {
                let newPortfolio = [];
                querySnapshot.forEach((doc) => {
                    newPortfolio.push({...doc.data(), id: doc.id})
                });
                setPortfolios(newPortfolio)
            });
            setIsInit(true);
        }
    }, [])
    return(<div>
        {portfolios && <div>
            <div>
                <p className={styles.title}>
                    Latest Portfolios
                </p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {portfolios.map(portfolio => <PortfolioCard title={portfolio.title} author={portfolio.user} image={portfolio.image} id={portfolio.id}/>)}
            </div>
        </div>}
    </div>);
}
