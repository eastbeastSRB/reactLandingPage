import React from 'react';
import { Nav, Navbar, Button, ButtonToolbar} from 'react-bootstrap';
import styled from 'styled-components';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import outdoorlyLogo from '../assets/outdoorlyLogo.svg'

const Styles = styled.div`

    .jumbo {
        background: url(${outdoorlyLogo}) no-repeat
        width: 8%;
        position: relative;
        top: 75px;
        left: 10px;
    }

    .navbar {
        background-color: #222;
        height: 71px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color:white;
        }
    }

    .signUpBtn {
        background-color: #ff4c5f;
    }
`

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Jumbo className="jumbo"> <Navbar.Brand href="/"></Navbar.Brand> </Jumbo>
            <Navbar.Toggle aria-controls="soill-navbar-nav"/>
            <Navbar.Collapse id="soill-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Item> <Nav.Link href="/exclusive-discounts"> ACCESS EXCLUCIVE DISCOUNTS </Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link href="signup" className="signUpBtn"> SIGN UP </Nav.Link> </Nav.Item>
                </Nav>
        </Navbar>
    </Styles>
)