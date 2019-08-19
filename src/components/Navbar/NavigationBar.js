import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import classes from './NavigationBar.css';
import styled from 'styled-components';
import media from 'styled-media-query';

const Styles = styled.div`
    
    .navbar {
        background-color: #222;
        height: 64px;
        padding-right: 0px;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #FFFFFF;

        &:hover {
            color:#FFFFFF; 
        }
    }
            
`;

const MediaQuery = styled.div`
    ${media.lessThan('small')`
        .${classes.navbar} {
            width: 100%;
        }
        .${classes.jumbo} {
            margin-top: -16.5%;
            margin-left: 0%;
        }
        .${classes.signUpBtn} {
            margin-top: -8px;
            margin-right: -1px;
        }
        .${classes.discountTxt} {
            display:none;
        }
    `}
`;

export const NavigationBar = () => (
    <MediaQuery>
    <Styles>
        <Navbar expand="lg" fixed="top">
            <div className={classes.headerlogo}>  <a href="/home"> <Navbar.Brand href="/"></Navbar.Brand> </a> </div>
            {/* <Navbar.Toggle aria-controls="soill-navbar-nav"/> */}
            {/* <Navbar.Collapse id="soill-navbar-nav" />  */}
                <Nav className="ml-auto">
                    <Nav.Item> <Nav.Link href="/exclusive-discounts" className={classes.discountTxt}> ACCESS EXCLUCIVE DISCOUNTS </Nav.Link> </Nav.Item>
                    <Nav.Item className={classes.signUpBtn}> <Nav.Link href="https://outdoorly.com/signup" className={classes.signTxt}> SIGN UP </Nav.Link> </Nav.Item>
                </Nav>
        </Navbar>
    </Styles>
    </MediaQuery>
)