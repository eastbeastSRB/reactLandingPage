import React from 'react';
import { Jumbotron as Jumbo, Nav, Navbar, Button, ButtonToolbar} from 'react-bootstrap';
import styled from 'styled-components';
import outdoorlyFooter from '../assets/outdoorlyFooter.png'

const Styles = styled.div`

    .jumbo {
        background: url(${outdoorlyFooter}) 0% 0% no-repeat padding-box;
        width: 8%;
        position: relative;
        top: 75px;
        left: 10px;
    }

    .navbar {
        background-color: #222;
        height: 64px;
        padding-right: 0px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #FFFFFF;

        &:hover {
            color:white;
        }
    }

    .signUpBtn {
        background-color: #FF4C5F;
        background: #FF4C5F 0% 0% no-repeat padding-box;
        opacity: 1;
        top: 0px;
        left: 1267px;
        width: 133px;
        height: 64px;
    }

    .signTxt {
        font: Regular 15px/18px Rubik Medium;
        letter-spacing: 2.25px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
        padding-top: 15%;
        text-align: center;
    }
`

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" fixed="top">
            <Jumbo className="jumbo"> <Navbar.Brand href="/"></Navbar.Brand> </Jumbo>
            <Navbar.Toggle aria-controls="soill-navbar-nav"/>
            <Navbar.Collapse id="soill-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Item> <Nav.Link href="/exclusive-discounts"> ACCESS EXCLUCIVE DISCOUNTS </Nav.Link> </Nav.Item>
                    <Nav.Item className="signUpBtn"> <Nav.Link href="signup" className="signTxt"> SIGN UP </Nav.Link> </Nav.Item>
                </Nav>
        </Navbar>
    </Styles>
)