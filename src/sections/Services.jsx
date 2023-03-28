import { Card, Container } from "react-bootstrap";
import ServiceItem from "./ServiceItem";
import allServices from "../assets/json/services.json";

const Services = () => {

    const position = {
        Left: "left",
        Right: "right"
    }

    return (
        <section id="services">
            <Container>
                <Card bg="dark">
                    <Card.Header>
                        <h3 className="text-center text-teal bold">Services</h3>
                        <p className="text-center">Je vous propose des services basant sur la technologie de l’informatique.</p>
                    </Card.Header>
                    <Card.Body>
                        { allServices.map((service, index) => ( 
                            <ServiceItem 
                                key={index}
                                index={index}
                                service={service} 
                                position={position}/> )) 
                        }
                    </Card.Body>
                </Card>
            </Container>
        </section>
    );

}

export default Services;