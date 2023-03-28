import { Container } from "react-bootstrap";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";

function Content() {
    return (
        <Container fluid>
            <Home/>
            <Services/>
            <Portfolio/>
            <Contact/> 
        </Container>
    );
}

export default Content;