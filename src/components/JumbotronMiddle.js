import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import climbwallSecond from '../assets/climbwallSecond.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${climbwallSecond}) 0% 0% no-repeat padding-box;
        opacity: 1;
        background-size: cover;
        height: 560px;
        // width: 1400px;
        margin-top: 5%
    }

    .information-label {
        color: #FFFFFF
        margin-left: 70px;
        margin-top: 133px;
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
    
    .discTitle {
        margin-top: 29px;
        margin-bottom: 26px;
    }

    .discTxt {
        text-align: left;
        font: Regular 16px/24px Rubik Medium;
        letter-spacing: 2.4px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
        font-size: 16px;
    }
`;


export const MiddleSection = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
            </div>
            <div className="information-label">
            <Button className="discountBtn"> pro discount </Button>
                <div className="discTitle">
                    <h1> PROS SAVE </h1>
                    <h1> UP TO 65% </h1>
                </div>
                <h3 className="discTxt"> Make the most out of being a pro </h3>
                <h3 className="discTxt"> by enjoying the outdoors the way they </h3>
                <h3 className="discTxt"> were meant to be enjoyed </h3>
            </div>
        </Jumbo>
    </Styles>
)