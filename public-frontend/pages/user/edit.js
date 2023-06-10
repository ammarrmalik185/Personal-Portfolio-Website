import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router";
import {auth} from "../../services/firebaseService"
import {useState} from "react";
import {Alert} from 'react-bootstrap';
import staticData from "../../staticData.json";

export default function LoginPage() {
    const Router = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    return (
        <div style={{display: "grid", gridTemplateColumns: "auto auto"}}>
            <div className={styles.loginForm} style={{minWidth: 500, display:"flex", justifyContent: "center", flexDirection:"column"}}>
                <h1 className={styles.loginFormHeader}>User Settings</h1>

                <div className={styles.formImageInput}>
                    <img onClick={() => {
                        // TODO: open file picker
                    }} className='rounded-full' src={staticData.defaults.profilePicture} title={name}  alt="image" width={150} height={150} style={{margin: 30}}/>
                    {/*<Image className='rounded-full' src={profilePicture} alt="Sunset in the mountains" width={64}*/}
                    {/*       height={64}/>*/}
                </div>

                <input value={email} onChange={v => {
                    setErr("");
                    setEmail(v.target.value)
                }} type="text" className={styles.loginFormInput} placeholder="Username"/>

                {err !== "" && <Alert variant={"warning"}>{err.message}</Alert>}

                <button className={styles.loginButton} onClick={v => {
                    v.preventDefault();
                    // TODO: update profile
                }}>Update Profile
                </button>
            </div>
            <div className={styles.loginForm} style={{minWidth: 500, display:"flex", justifyContent: "center", flexDirection:"column"}}>
                <h1 className={styles.loginFormHeader}>Security Settings</h1>

                <br/>

                <input value={password} onChange={v => {
                    setErr("");
                    setPassword(v.target.value)
                }} type="password" className={styles.loginFormInput} placeholder="Old Password" required/>

                <br/>


                <input value={password} onChange={v => {
                    setErr("");
                    setPassword(v.target.value)
                }} type="password" className={styles.loginFormInput} placeholder="New Password" required/>


                <input value={password} onChange={v => {
                    setErr("");
                    setPassword(v.target.value)
                }} type="password" className={styles.loginFormInput} placeholder="Retype Password" required/>


                {err !== "" && <Alert variant={"warning"}>{err.message}</Alert>}

                <br/>

                <button className={styles.loginButton} onClick={v => {
                    v.preventDefault();
                    // TODO: update password
                }}>Change Password
                </button>
                <div className={styles.loginFormText}>Don't Remember old password? <a
                    href={staticData.pathingData.baseUrl + "/signup"}>Forgot Password</a></div>
            </div>
        </div>
    )
}
