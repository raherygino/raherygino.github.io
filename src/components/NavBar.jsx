import { Nav, Navbar } from "react-bootstrap";
import logo from '../assets/img/logo.png';

function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" className="lb-primary" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={ logo }
              width="35"
              height="35"
              className="ms-3 d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>
              <Nav.Link href="#home">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" 
                  height="16" 
                  fill="currentColor"
                  className="bi bi-house mt-1 me-2" 
                  viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                </svg> Accueil
              </Nav.Link>

              <Nav.Link href="#services">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor" 
                  className="bi bi-ui-checks-grid mt-1 me-2"
                  viewBox="0 0 16 16">
                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
                </svg> Services
              </Nav.Link>
              
              <Nav.Link href="#portfolio">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor"
                  className="bi bi-book mt-1 me-2" viewBox="0 0 16 16">
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
                </svg> Portfolio
              </Nav.Link>

              <Nav.Link href="#contact">
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 me-2" width="16" height="16" id="Calque_3" fill="currentColor" dataname="Calque 3" viewBox="0 0 168 168">
                <path d="M174.15,169.31a3,3,0,0,1-3.62,3.53L135,163.63a76.55,76.55,0,1,1,30.73-30.45Z" transform="translate(-14.63 -12.17)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="15"/></svg> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBar;