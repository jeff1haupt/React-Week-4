import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation (props) {
    return(
        
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Project Logo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link> {/*think of these as buttons or links in Bootstrap */}
                        <Link to="/toasts" className="nav-link">Breweries</Link>
                        <Link to="/table" className="nav-link">Users</Link>
                    </Nav>
            </Container>
            </Navbar>
        </div>
    )
}

export default Navigation