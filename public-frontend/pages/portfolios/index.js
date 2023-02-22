import { firestore } from "../../services/firebaseService";
import PortfolioCard from '../../components/portfolioComponents/portfolioCard'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from "react";

export default function Portfolios() {
  const [portfolios, setPortfolios] = useState([]);
  const [isInit, setIsInit] = useState(false);
  useEffect(() => {
    if(!isInit) {
      firestore.collection("portfolios").get().then((querySnapshot) => {
        let newPortfolios = [];
        querySnapshot.forEach((doc) => {
          newPortfolios.push({...doc.data(), id: doc.id})
        });
        setPortfolios(newPortfolios)
      });
      setIsInit(true);
    }
  }, [])
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Portfolios
        </h1>
        <h2 className={styles.subTitle}>
          Browse profiles of people
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {portfolios.sort().map((item) => {
            return(
                <div className='mt-5' key={item.id}>
                  <PortfolioCard
                      title={item.title}
                      image={process.env.NextBasePath + "/sunset.jpg"}
                      description={"by: " + item.author}
                      id={item.id}
                  />
                </div>
            )
          })}
        </div>

        {/* page number slider  */}

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
