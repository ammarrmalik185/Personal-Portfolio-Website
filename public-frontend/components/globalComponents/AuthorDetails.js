import Image from "next/image";
import {useEffect, useState} from "react";
import {firestore} from "../../services/firebaseService";
import styles from "../../styles/Home.module.css"
const staticData = require("../../staticData.json")

export default function AuthorDetails({userId}){
    const [name, setName] = useState("");
    const [postCount, setPostCount] = useState("");
    const [since, setSince] = useState("2020");
    const [details, setDetails] = useState("");
    const [profilePicture, setProfilePicture] = useState("../../images/sunset.jpg");

    const [init, setInit] = useState(false);
    useEffect(() => {
        if(init) return;
        firestore.collection("users").doc(userId).get().then(snapshot => {
            if (snapshot.exists){
                let data = snapshot.data();
                setName(data.displayName);
                setPostCount(data.posts);
                console.log(data.signupTime)
                setSince(new Date(data.signupTime).getFullYear().toString());
                setDetails(data.details);
                setProfilePicture(data.profilePicture);
            }else{
                console.error("not found")
            }
        })
        setInit(true);
    })

    return (
        <div className={styles.authorContainer}>
            <p className={styles.authorHeader}>
                The Author
            </p>
            <hr/>
            <div className='flex space-x-2'>
                <div>
                    <img className='rounded-full' src={profilePicture || staticData.defaults.profilePicture} title={name}  alt="image" width={64} height={64}/>
                    {/*<Image className='rounded-full' src={profilePicture} alt="Sunset in the mountains" width={64}*/}
                    {/*       height={64}/>*/}
                </div>
                <div>
                    <p className={styles.authorText}>
                        {name}
                    </p>
                    <div  className={styles.authorSubText}>
                        <p>
                            {postCount} posts
                        </p>
                        <p>
                            .
                        </p>
                        <p>
                            Since {since}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.authorDescription}>
                <p>{details}</p>
            </div>
        </div>
    )
}
