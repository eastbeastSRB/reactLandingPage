import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import middlesection_climb from '../assets/middlesection_climb.png';

const Styles = styled.div`
    .jumbo {
        background: url(${middlesection_climb}) 0% 0% no-repeat padding-box;
        opacity: 1;
        background-size: cover;
        height: 560px;
        // width: 1400px;
        margin-top: 5%
    }

    .information-label {
        color: #FFFFFF
        margin-left: 70px;
    }

    .discountBtn {
        text-transform: uppercase;
        background: #000000 0% 0% no-repeat padding-box;
        width: 186px;
        height: 48px;
        border-radius: 4px;
        opacity: 0.45;
        border-color:  #000000;
        color: #FFFFFF;
    }
`;


export const MiddleSection = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
            </div>
            <div className="information-label">
            <Button className="discountBtn"> pro discount </Button>
                <h1 className="mt-5"> PROS SAVE </h1>
                <h1> UP TO 65% </h1>
                <h3> Make the most out of being a pro </h3>
                <h3> by enjoying the outdoors the way they </h3>
                <h3> were meant to be enjoyed </h3>
            </div>
        </Jumbo>
    </Styles>
)