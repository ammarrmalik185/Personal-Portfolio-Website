import { Col, Container, Row } from "react-bootstrap";
import {CurrentTheme} from "../../styles/colorSchemes";

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
                        <Row style={styles.text}>Phone Number: 03349564896</Row>
                        <Row style={styles.text}>Address: 03349564896</Row>
                        <Row style={styles.text}>Github: https://github.com/ammarrmalik185</Row>
                        <Row style={styles.text}>Facebook: 03349564896</Row>
                        <Row style={styles.text}>Instagram: 03349564896</Row>
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
        // position: "absolute",
        // left:0,
        // right:0,
        // bottom: 0,
        margin:0,
        padding: 0,
        backgroundColor: CurrentTheme.primary
    },
    text:{
        color:"white"
    },
    row:{
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center"
    }
}
