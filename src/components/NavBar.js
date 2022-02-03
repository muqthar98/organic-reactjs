import React from "react";
import "./NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
//import DarkModeToggle from "react-dark-mode-toggle";

function NavBar() {
  //const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header>
      <Navbar
        className="header navbar-custom"
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                className="header_logo"
                src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
                alt=""
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <LinkContainer to="/">
                <Nav.Link>
                <i
                    className="fas fa-home"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i
                    className="fas fa-shopping-cart"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i
                    className="fas fa-sign-in-alt"
                    style={{ marginRight: "5px" }}
                  ></i>
                  SignIn
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>
                  <i class="fas fa-phone" style={{ marginRight: "5px" }}></i>
                  ContactUs
                </Nav.Link>
              </LinkContainer>
              {/* <p style={{ marginTop: "5px" }}>Light</p> */}
              {/* <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
              /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
