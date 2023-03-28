import { Col, Row } from "react-bootstrap";
import graphic_design from "../assets/img/graphic_design.png";
import website from "../assets/img/website.png";
import app_web from "../assets/img/app_web.png";
import app_mobile from "../assets/img/app_mobile.png";

function ServiceItem(props) {
    const service = props.service;
    const RIGHT = props.position.Right;
    const LEFT = props.position.Left;
    const img = [ graphic_design, website, app_web, app_mobile ];

    return (
        <Row className="justify-content-lg-center">
        {
            service.property.position === RIGHT && 
            <Col lg={4} md={6}>
                <img 
                    src={img[props.index]} 
                    alt={service.headline}
                    width="350"/>
            </Col>
        }
        <Col lg={5} md={6} className="center">
            <div>
                <h1 className={`${service.property.textColor} bold mt-9`}>{ service.title }</h1>
                <h3>{ service.headline }</h3>
                <p>{ service.description }</p>
            </div>
        </Col>
        {
            service.property.position === LEFT && 
            <Col lg={4} md={6}>
                <img 
                    src={img[props.index]} 
                    alt={service.headline}
                    width="350" />
            </Col>
        }
    </Row>
    );
}

export default ServiceItem;