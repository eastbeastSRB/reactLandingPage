import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Style = styled.div`

    .botompart{
        top: 0px;
        left: 0px;
        height: 480px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
    }

    .firstTxt {
        text-align: center;
        font: Regular 24px/28px Rubik Medium;
        letter-spacing: 3.6px;
        color: #FF4C5F;
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
        margin-left: 46.5%;
    }
`;

export const BottomOfPage = () => (
    <Style>
        <div className="botompart">
            <h1 className="text-center font-weight-bold"> So iLL </h1>
            <p className="text-center firstTxt" >  SAVE UP TO 65% </p>
            <p className="text-center secondTxt"> Apply online for exclusive pro access </p>
            <Button className="signUpBtn"> Sign up</Button>
        </div>
    </Style>
)