import { Col, Container, Row } from "react-bootstrap";
import {CurrentTheme} from "../../styles/colorSchemes";
const staticData = require("../../staticData.json")

export default function Footer(){
    return(
        <footer style={styles.footer}>
            <Container>
                <Row style={styles.row}>
                    <p></p>
                </Row>
                <Row style={styles.row}>
                    <Col>
                        <Row style={styles.text}><h4>Contact Me</h4></Row>
                        <Row style={styles.text}>Phone Number: 03349564896</Row>
                        <Row style={styles.text}>Address: 03349564896</Row>
                        <Row style={styles.text}>Github: 03349564896</Row>
                        <Row style={styles.text}>Facebook: 03349564896</Row>
                        <Row style={styles.text}>Instagram: 03349564896</Row>
                    </Col>
                    <Col>
                        <Row style={styles.text}><h4>Contact Me</h4></Row>
                        <Row style={styles.text}>Phone Number: 03349564896</Row>
                        <Row style={styles.text}>Address: 03349564896</Row>
                        <Row style={styles.text}>Github: 03349564896</Row>
                        <Row style={styles.text}>Facebook: 03349564896</Row>
                        <Row style={styles.text}>Instagram: 03349564896</Row>
                    </Col>
                    <Col>
                        <Row style={styles.text}><h4>Contact Me</h4></Row>
                        <Row style={styles.text}>Phone Number: {staticData.websiteData.contactNo}</Row>
                        <Row style={styles.text}><div>Email: <a href={staticData.websiteData.email.url}>{staticData.websiteData.email.title}</a></div></Row>
                        <Row style={styles.text}><div>Github: <a href={staticData.websiteData.github.url}>{staticData.websiteData.github.title}</a></div></Row>
                        <Row style={styles.text}><div>Twitter: <a href={staticData.websiteData.twitter.url}>{staticData.websiteData.twitter.title}</a></div></Row>
                        <Row style={styles.text}><div>Instagram: <a href={staticData.websiteData.instagram.url}>{staticData.websiteData.instagram.title}</a></div></Row>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <h6 style={styles.text}>Created By Ammar Rashid Malik</h6>
                </Row>
            </Container>
        </footer>
    )
}

const styles = {
    footer:{
        margin:0,
        padding: 0,
        backgroundColor: CurrentTheme.primary
    },
    text:{
        color:"white"
    },
    row:{
        // marginTop: 10,
        marginBottom: 10,
        alignItems: "center"
    }
}
