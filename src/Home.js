import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { ChooseCategory } from './components/choosecategory';


const Styles = styled.div`
    .soillInformation {
        margin-left: 5%;
    }

    .informationLabel {
        height: 0px;
        color: #ff4c5f;
        font-weight: bold;
        line-height: 1.5;
        margin-top: 2%;
        font-size: 20px;
    }

    .soilabout {
        
    }

    .apply {
        text-align: left;
        text-decoration: underline;
        font-family: Semi Bold 16px/26px Inter;
        letter-spacing: 0.16px;
        color: #231F20;
    }
`;

export const Home = () => (
    <Styles>
        <div className="soillInformation">
            <h5 className="text-uppercase"> outdoorly partner </h5>
            <h1> SO iLL - Climbing, Holds and Gear</h1>
            <div className="informationLabel">
                <p> SAVE UP TO 65% </p>
                <p> FREE SHIPPING </p>
                <p> 14 CATEGORIES </p>
            </div>
            <Container>
            <Row>
                <Col xs="auto">
                    <p className="soillabout"> Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. 
                    Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                    Curabitur blandit tempus porttitor. </p>
                    <p className="soillabout"> Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. 
                    Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <a href="/#" className="apply"> Apply online </a>
                </Col>
            </Row>
            </Container>
            <ChooseCategory />
        </div>
    </Styles>
)