import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bigcomponent_1 from '../assets/bigcomponent_1.png'
import smallcomponent_1 from '../assets/smallcomponent_1.png'
import smallcomponent_2 from '../assets/smallcomponent_2.png'
import smallcomponent_3 from '../assets/smallcomponent_3.png'
import smallcomponent_4 from '../assets/smallcomponent_4.png'


const Styles = styled.div`

    @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');  

    .firstcomponent {
        background: url(${smallcomponent_3}) 0% 0% no-repeat padding-box;
        background-size: cover;
        height: 315px;
        width: 315px;
        border-radius: 4px 0px 0px 4px;
        opacity: 1;
    }
    .secondcomponent {
        background: url(${smallcomponent_2}) 0% 0% no-repeat padding-box;
        background-size: cover;
        height: 315px;
        width: 315px;
        border-radius: 4px 0px 0px 4px;
        opacity: 1;
    }
    .thirdcomponent {
        background: url(${smallcomponent_1}) 0% 0% no-repeat padding-box;
        background-size: cover;
        height: 315px;
        width: 315px;
        border-radius: 4px 0px 0px 4px;
        opacity: 1;
    }
    .fourthcomponent {
        background: url(${smallcomponent_4}) 0% 0% no-repeat padding-box;
        background-size: cover;
        height: 315px;
        width: 315px;
        border-radius: 4px 0px 0px 4px;
        opacity: 1;
    }

    .bigcomponent {
        background: url(${bigcomponent_1}) 0% 0% no-repeat padding-box;
        background-size: cover;
        height: 630px;
        width: 630px;
        margin-bottom: -630px;
        margin-top: 120px;
        border-radius: 4px 0px 0px 4px;
        opacity: 1;
    }

    .components {
        margin-left: 195px;
        margin-right: 0px;
        padding-left: 73px;
        width: 991px;
    }

    .bigcomponentBtn {
        width: 178px;
        height: 48px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 4px;
        opacity: 1;
        text-transform: uppercase;
        border-color: #FFFFFF;
        margin-top: 552px;
        margin-left: 210px;
    }

    .smallcomponentBtn {
        width: 178px;
        height: 48px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 4px;
        opacity: 1;
        text-transform: uppercase;
        border-color: #FFFFFF;
        margin-top: 237px;
        margin-left: 69px;
    }

    .buttonTxt {
        font: Regular 15px/18px Rubik Medium;
        letter-spacing: 2.25px;
        color: #231F20;
        font-size: 14px;
        font-weight: 500;
    }
`;

const MediaQuery = styled.div`
    ${media.lessThan('small')`
        .bigcomponent {
            display: inline-flex;
            margin-left: -34%;
            margin-bottom: 0%;
        }
        .components {
            margin-left: -35%;
        }
        .firstcomponent, .secondcomponent, .thirdcomponent, .fourthcomponent {
            height: 415px;
            width: 46%;
        }
        .smallcomponentBtn {
            margin-top: 76%;
            margin-left: 28%;
        }
    `}
`;


export const ChooseCategory = () => {
    return (
    <MediaQuery>
    <Styles>
        <div className="bigcomponent"> <Button className="bigcomponentBtn buttonTxt"> Climbing shoes </Button> </div>
        <Container>
            <div className="components">
            <Row>
                <Col size="6" sm="4">
                    <div className="firstcomponent">
                        <Button className="smallcomponentBtn buttonTxt">  Mens Aparel </Button>
                    </div>
                </Col>
                <Col size="6" sm="4">
                    <div className="secondcomponent">
                        <Button className="smallcomponentBtn buttonTxt">  Womens Aparel </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="6" sm="4">
                    <div className="thirdcomponent">
                        <Button className="smallcomponentBtn buttonTxt">  Accessories </Button>
                    </div>
                </Col>
                <Col size="6" sm="4">
                    <div className="fourthcomponent">
                        <Button className="smallcomponentBtn buttonTxt">  Lifestyle </Button>
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
    </Styles>
    </MediaQuery>
    )
}