import { Button, Card, Col, Container, Row } from "react-bootstrap";
import allProject from "../assets/json/projects.json";

import Infographies from "../assets/img/clients/video.png";
import OnRushers from "../assets/img/clients/onrushers.png";
import Gzerone from "../assets/img/clients/gzerone.png";
import TiKe from "../assets/img/clients/tike.png";
import Kapsul from "../assets/img/clients/kapsul.png";
import Chay from "../assets/img/clients/chay.png";
import Mms from "../assets/img/clients/mms.png";
import Bricotech from "../assets/img/clients/bricotech.png";
import Mandowe from "../assets/img/clients/mandowe.png";

const Portfolio = () => {

    const imgProject = [Infographies, OnRushers, Gzerone, TiKe, Kapsul, Chay, Mms, Bricotech, Mandowe];

    return (
        <Container id="portfolio">
            <Card bg="dark" className="mt-5">
                <Card.Header>
                    <h3 className="text-center text-teal bold">Portfolio</h3>
                </Card.Header>
                <Card.Body>
                    <Row>
                        { allProject.map((project, index) => (
                        <Col 
                            className="mb-5"
                            key={index}
                            lg={ project.width_col }
                            md={ project.width_col }>
                            <Card bg={ project.bg }>
                                <Card.Body className="text-center">
                                    <img 
                                        src={ imgProject[index] }
                                        alt={ project.title }
                                        width={ project.width }/>
                                    <h5 className="mb-0">{ project.title }</h5>
                                    <p>{ project.type }</p>
                                    <Button href={ project.link } variant="success">Voir une aperçu</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Portfolio;