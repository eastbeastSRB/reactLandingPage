import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import media from 'styled-media-query';
import soilllogoBlack from '../assets/soilllogoBlack.png';

const Style = styled.div`

    .botompart{
        padding-top: 120px;
        height: 472px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
    }

    .firstTxt {
        text-align: center;
        font: Regular 24px/28px Rubik Medium;
        font-size: 28px;
        letter-spacing: 3.6px;
        color: #FF4C5F;
        opacity: 1;
    }

    .secondTxt {
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0;
        color: #231F20;
        opacity: 1;
    }

    .signUpBtn{
        width: 133px;
        height: 64px;
        background: #FF4C5F 0% 0% no-repeat padding-box;
        border-radius: 4px;
        border-color: #FF4C5F;
        opacity: 1;
        text-align: center;
        text-transform: uppercase;
        margin-left: 46%;
        margin-top: 30px;
    }

    .soilLogo {
        width: 170px;
        height: 39px;
        background: url(${soilllogoBlack});
        text-align: center;
        margin-left: 45%;
        margin-bottom: 30px;
    }
`;


const MediaQuery = styled.div`
    ${media.lessThan('small')`
        .soilLogo {
            margin-left:28%;
        }
        .signUpBtn {
            margin-left:34%;
        }
    `}
`;

export const BottomOfPage = () => (
    <MediaQuery>
    <Style>
        <div className="botompart">
            <div className="soilLogo"> </div>
            <p className="firstTxt" > SAVE UP TO 65% </p>
            <p className="text-center secondTxt"> Apply online for exclusive pro access </p>
            <Button className="signUpBtn"> Sign up</Button>
        </div>
    </Style>
    </MediaQuery>
)