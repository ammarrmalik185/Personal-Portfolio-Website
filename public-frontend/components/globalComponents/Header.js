import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from "../../styles/Home.module.css";
import { auth } from "../../services/firebaseService"
import {useRouter} from "next/router";
import {useState} from "react";
import {detectPage} from "../../services/pageDetector";

const staticData = require("../../staticData.json")

export default function Header() {
    const router = useRouter();
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const currentPage = detectPage(router.pathname);
    console.log(currentPage)
    auth.onAuthStateChanged(user => {
        setIsLogged(user != null)
        setIsAdmin(user != null && staticData.adminData.adminIds.includes(user.uid))
    })
    return (
        <Navbar className={styles.header} expand="lg">
            <Container>
                <Navbar.Brand href="#home">{staticData.websiteData.title}</Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={styles.headerNavLink} href={staticData.pathingData.baseUrl + "/"} active={currentPage === staticData.pathingData.pageEnum.home}>Home</Nav.Link>
                        <Nav.Link className={styles.headerNavLink} href={staticData.pathingData.baseUrl + "/blogs"} active={currentPage === staticData.pathingData.pageEnum.blogs}>Blogs</Nav.Link>
                        <Nav.Link className={styles.headerNavLink} href={staticData.pathingData.baseUrl + "/projects"} active={currentPage === staticData.pathingData.pageEnum.projects}>Projects</Nav.Link>
                        <Nav.Link className={styles.headerNavLink} href={staticData.pathingData.baseUrl + "/portfolios"} active={currentPage === staticData.pathingData.pageEnum.portfolios}>Portfolios</Nav.Link>
                        {isAdmin && <Nav className="me-auto">
                            <Nav.Link className={styles.headerNavLink} href={staticData.pathingData.baseUrl + "/edit"} active={currentPage === staticData.pathingData.pageEnum.homeEdit}>Edit Main Portfolio</Nav.Link>
                         </Nav>}
                        {isLogged && <Nav className="me-auto">
                            <Nav.Link className={styles.headerNavLink} href={staticData.pathingData.baseUrl + "/blogs/edit"} active={currentPage === staticData.pathingData.pageEnum.blogEdit}>Create Blog</Nav.Link>
                            <Nav.Link className={styles.headerNavLink} href={staticData.pathingData.baseUrl + "/projects/edit"} active={currentPage === staticData.pathingData.pageEnum.projectEdit}>Create Project</Nav.Link>
                            <Nav.Link className={styles.headerNavLink} href={staticData.pathingData.baseUrl + "/portfolios/edit"} active={currentPage === staticData.pathingData.pageEnum.portfolioEdit}>Create Portfolio</Nav.Link>
                        </Nav>}
                    </Nav>
                    {/*{isLogged && <Nav className="me-auto">*/}
                    {/*    <Nav.Link href={staticData.pathingData.baseUrl + "/blogs/edit"} active={router.pathname.endsWith("/blogs/edit")}>Create Blog</Nav.Link>*/}
                    {/*    <Nav.Link href={staticData.pathingData.baseUrl + "/projects/edit"} active={router.pathname.endsWith("/projects/edit")}>Create Project</Nav.Link>*/}
                    {/*    <Nav.Link href={staticData.pathingData.baseUrl + "/portfolios/edit"} active={router.pathname.endsWith("/portfolios/edit")}>Create Portfolio</Nav.Link>*/}
                    {/*</Nav>}*/}

                </Navbar.Collapse>
                <Navbar.Text>
                    {isLogged && <a href="" onClick={() => auth.signOut()}>Signout</a>}
                    {!isLogged && <a href={staticData.pathingData.baseUrl + "/login"}>Login</a>}
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}
