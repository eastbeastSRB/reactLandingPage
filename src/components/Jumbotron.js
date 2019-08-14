import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import climbWall from '../assets/climbWall.jpg';
import outdoorlyLogo from '../assets/outdoorlyLogo.svg'
import soillLogo from '../assets/soillLogo.jpg'

const Styles = styled.div`
    .jumbo {
        background: url(${climbWall}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -2;
    }

    .logo1 {
        background: url(${outdoorlyLogo}) no-repeat
    }
    .logo2 {
        background: url(${soillLogo}) no-repeat
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
                <div className="logo1"> </div>
                <div className="logo2"> </div>
            </div>
            <Container>
                <h1 className="text-center mt-5"> LET'S TAKE HOLD </h1>
                <h1 className="text-center"> TOGETHER </h1>
            </Container>
        </Jumbo>
    </Styles>
)