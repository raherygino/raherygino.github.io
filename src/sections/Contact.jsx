import { useRef, useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row, Toast } from "react-bootstrap";


const Contact = () => {

    const [message, setMessage] = useState(false);
    const formRef = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
      e.target.reset();
    };

    return (
        <Container id="contact">
            <Card bg="dark">
                <Card.Header>
                    <h3 className="text-center bold text-teal">Contact</h3>
                </Card.Header>
                <Card.Body className="pb-4">
                    <Row>
                        <Col 
                            lg={6}
                            md={6}>
                            <p className="text-justify">N'hesite pas à me contacter si vous avez des projects, 
                                des questions et aussi des suggestions à me donner. 
                                Je suis content de répondre votre demande. 
                                Vous pouvez me contacter par: email, facebook, 
                                Instagram et whatsapp ou vous pouvez utiliser aussi le formulaire dans mon site web. Je vous repondrai le plus vite possible.
                            </p>
                            <div className="email div">
                                <svg stroke="currentColor" className="me-2" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path>
                                </svg>
                                <a href="mailto:georgino197@gmail.com">georgino197@gmail.com</a>
                            </div>

                            <div className="whatsapp div mt-2">
                                <svg stroke="currentColor" className="me-2" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                </svg>
                                <a href="phone:+261346500700">+261 34 65 007 00</a>
                            </div>
                        </Col>
                        <Col 
                            lg={6}
                            md={6}>
                            <form ref={formRef} onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={6}>
                                    <FloatingLabel
                                        controlId="name"
                                        label="Nom"
                                        className="mb-3">
                                        <Form.Control 
                                            type="text"
                                            placeholder="Votre nom"/>
                                    </FloatingLabel>
                                </Col>

                                <Col lg={6}>
                                    <FloatingLabel
                                        controlId="lastname"
                                        label="Prénom"
                                        className="mb-3">
                                        <Form.Control 
                                            type="text"
                                            placeholder="Votre prénom"/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <FloatingLabel
                                        controlId="email"
                                        label="Email"
                                        className="mb-3">
                                        <Form.Control 
                                            type="email"
                                            placeholder="Votre email"/>
                                    </FloatingLabel>
                                </Col>
                                <Col lg={6}>
                                    <FloatingLabel
                                        controlId="subject"
                                        label="Objet"
                                        className="mb-3">
                                        <Form.Control 
                                            type="text"
                                            placeholder="Votre email"/>
                                    </FloatingLabel>
                                </Col>
                            </Row>    
                            
                            <FloatingLabel 
                                controlId="message"
                                label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Ecrire votre message ici"
                                    style={{ height: '100px' }}/>
                            </FloatingLabel> 

                            <Button variant="success" type="submit" className="mt-2">Envoyer</Button>

                            </form>

                            <div id="toast-gino">
                                <Toast onClose={() => setMessage(false)} show={message}  delay={4000} autohide>
                                    <Toast.Header>
                                        <img
                                            src="holder.js/20x20?text=%20"
                                            className="rounded me-2"
                                            alt=""/>
                                        <strong className="me-auto text-dark">Merci!</strong>
                                    </Toast.Header>
                                    <Toast.Body>Nickel, je vous répondrai le plus vite possible, Merci</Toast.Body>
                                </Toast>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>            
        </Container>
    );
}

export default Contact;