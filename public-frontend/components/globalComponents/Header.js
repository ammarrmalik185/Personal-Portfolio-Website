import { Navbar, Nav, Container } from 'react-bootstrap';
import {useRouter} from "next/router";
const staticData = require("../../staticData.json")
export default function Header() {
    const router = useRouter();
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{staticData.websiteData.title}</Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={staticData.pathingData.baseUrl + "/"} active={!router.pathname.endsWith("/blogs") && !router.pathname.endsWith("/projects") && !router.pathname.endsWith("/portfolios")}>Home</Nav.Link>
                        <Nav.Link href={staticData.pathingData.baseUrl + "/blogs"} active={router.pathname.endsWith("/blogs")}>Blogs</Nav.Link>
                        <Nav.Link href={staticData.pathingData.baseUrl + "/projects"} active={router.pathname.endsWith("/projects")}>Projects</Nav.Link>
                        <Nav.Link href={staticData.pathingData.baseUrl + "/portfolios"} active={router.pathname.endsWith("/portfolios")}>Portfolios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Text>Login</Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}
