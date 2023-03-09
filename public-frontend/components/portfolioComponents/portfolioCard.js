import Image from "next/image";
import {RiFlag2Line} from "react-icons/ri";
import {useRouter} from "next/router";
import {CurrentTheme} from "../../styles/colorSchemes";
import {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import staticData from "../../staticData.json";
import {firestore} from "../../services/firebaseService";


function PortfolioCard ({ title, author, image, id }) {
    const Router = useRouter();
    const [authorName, setAuthorName] = useState("");
    const [init, setInit] = useState(false);
    useEffect(() => {
        if(init) return;

        firestore.collection("users").doc(author).get().then(snapshot => {
            if(snapshot.exists) {
                setAuthorName(snapshot.data().displayName)
            }
        })

        setInit(true);
    })
    return (
        <div className={styles.authorContainer}>
            <div className="rounded-lg px-6 pt-4" >
                <img className="rounded-lg" src={image || staticData.defaults.portfolioPicture} alt="Sunset in the mountains"  height="150" width="300"/></div>
            <div className="px-6 pt-2">
                <div>
                    <text className={styles.authorHeader}>
                        {title}
                    </text>
                </div>
                <p className={styles.cardSubText}>
                    {"By: " + authorName}
                </p>
            </div>

            <div className="px-6 pt-4 pb-2 flex space-between">
                <div className="rounded-md flex-grow">
                    <div className={styles.cardButton} onClick={() => Router.push({
                        pathname: "/portfolios/post",
                        query:{id: id}
                    })}>
                        <span> Keep Reading </span>
                    </div>

                </div>
                <div className="items-center">
                    <RiFlag2Line className="text-gray-700 text-lg" />
                </div>

            </div>
        </div>
    )
}

export default PortfolioCard;
