import React from 'react';
import { Jumbotron as Jumbo, Nav, Navbar, Button, ButtonToolbar} from 'react-bootstrap';
import styled from 'styled-components';
import outdoorlyFooter from '../assets/outdoorlyFooter.png'
import media from 'styled-media-query';

const Styles = styled.div`

    .jumbo {
        background: url(${outdoorlyFooter}) 0% 0% no-repeat padding-box;
        width: 130px;
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

    .discountTxt {
        text-align: left;
        font: Regular 13px/15px Rubik Medium;
        letter-spacing: 1.95px;
        color: #FFFFFF;
        text-transform: uppercase;
        padding-top: 20px;
        opacity: 1;
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

const MediaQuery = styled.div`
    ${media.lessThan('small')`

        .navbar {
            width: 100%;
        }

        .jumbo {
            margin-top: -16.5%;
            margin-left: 0%;
        }
        .signUpBtn {
            margin-top: -8px;
            margin-right: -1px;
        }


        .discountTxt {
            display:none;
        }

    `}
`;

export const NavigationBar = () => (
    <MediaQuery>
    <Styles>
        <Navbar expand="lg" fixed="top">
            <Jumbo className="jumbo">  <a href="/home"> <Navbar.Brand href="/"></Navbar.Brand> </a> </Jumbo>
            {/* <Navbar.Toggle aria-controls="soill-navbar-nav"/> */}
            <Navbar.Collapse id="soill-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Item> <Nav.Link href="/exclusive-discounts" className="discountTxt"> ACCESS EXCLUCIVE DISCOUNTS </Nav.Link> </Nav.Item>
                    <Nav.Item className="signUpBtn"> <Nav.Link href="https://outdoorly.com/signup" className="signTxt"> SIGN UP </Nav.Link> </Nav.Item>
                </Nav>
        </Navbar>
    </Styles>
    </MediaQuery>
)