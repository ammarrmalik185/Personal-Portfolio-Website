import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { CurrentTheme } from "../../styles/colorSchemes";
import Parser from "html-react-parser";
const staticData = require("../../staticData.json")

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerRow}>
                    <Row className={styles.footerText}><h4>Contact Me</h4></Row>
                    <Row className={styles.footerText}><div>Phone Number: <a href={"tel:" + staticData.websiteData.contactNo}>{staticData.websiteData.contactNo}</a></div></Row>
                    <Row className={styles.footerText}><div>Email: <a href={"mailto:" + staticData.websiteData.email.address}>{staticData.websiteData.email.title}</a></div></Row>
                    <Row className={styles.footerText}><div>Github: <a href={staticData.websiteData.github.url}>{staticData.websiteData.github.title}</a></div></Row>
                    <Row className={styles.footerText}><div>Twitter: <a href={staticData.websiteData.twitter.url}>{staticData.websiteData.twitter.title}</a></div></Row>
                    <Row className={styles.footerText}><div>Instagram: <a href={staticData.websiteData.instagram.url}>{staticData.websiteData.instagram.title}</a></div></Row>
                </div>
                <Row className={styles.footerRow}>
                    <h6 className={styles.footerText}>{Parser(staticData.websiteData.credits)}</h6>
                </Row>
            </Container>
        </footer>
    )
}
