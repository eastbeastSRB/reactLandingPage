import React from 'react'
import styled from 'styled-components';
import media from 'styled-media-query';
import { Container, Row, Col } from 'react-bootstrap';
import { ChooseCategory } from './components/choosecategory';


const Styles = styled.div`
    .soillInformation {
        margin-left: 70px;
        padding-top: 120px;
    }

    .informationLabel {
        height: 0px;
        color: #ff4c5f;
        font-weight: bold;
        line-height: 1.5;
        margin-top: 2%;
        font-size: 20px;
    }

    .soillabout {
        width: 652px;
        text-align: left;
        letter-spacing: 0.16px;
        color: #231F20;
        opacity: 1;
    }

    .apply {
        text-align: left;
        text-decoration: underline;
        font-family: Semi Bold 16px/26px Inter;
        letter-spacing: 0.16px;
        color: #231F20;
        font-weight: 600;
    }


    .outdoorlyPartner {
        font: Regular 15px/18px Rubik Medium;
        letter-spacing: 2.25px;
        color: #231F20;
        text-transform: uppercase;
        opacity: 1;
        font-size: 15px;
        margin-bottom: 15px;
    }
`;

const MediaQuery = styled.div`
    ${media.lessThan('small')`
    .soillInformation {
        margin-left: 30px;
        padding-top: 30px;
    }
    .informationLabel {
        display: inline;
        margin: 2%;
    }
    .soillabout {
        width: 100%;
        text-align: inherit;
    }
    .homeTxt {
        padding-left: 0px;
    }
    `}
    #chag {
        font-size:55px;
    }
`;


export const Home = () => (
    <MediaQuery>
    <Styles>
        <div className="soillInformation">
            <h5 className="outdoorlyPartner"> outdoorly partner </h5>
            <h1 id="chag"> <b> SO iLL </b> - Climbing, Holds and Gear</h1>
            <div className="informationLabel">
                <p> SAVE UP TO 65% </p>
                <p> FREE SHIPPING </p>
                <p> 14 CATEGORIES </p>
            </div>
            <Container className="homeTxt">
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
    </MediaQuery>
)