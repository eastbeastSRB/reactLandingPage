import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bigcomponent_1 from '../assets/bigcomponent_1.png'
import smallcomponent_1 from '../assets/smallcomponent_1.png'
import smallcomponent_2 from '../assets/smallcomponent_2.png'
import smallcomponent_3 from '../assets/smallcomponent_3.png'
import smallcomponent_4 from '../assets/smallcomponent_4.png'

const Styles = styled.div`

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
        border-radius: 4px 0px 0px 4px;
        opacity: 1;
    }

    .components {
        margin-left: 195px;
        margin-right: 0px;
        padding-left: 86px;
        width: 1002px;
    }
`;

export const ChooseCategory = () => {
    return (
    <Styles>
        <div className="bigcomponent"></div>
        <Container>
            <div className="components">
            <Row>
                <Col size="6" sm="4">
                    <div className="firstcomponent">
                    </div>
                </Col>
                <Col size="6" sm="4">
                    <div className="secondcomponent">
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="6" sm="4">
                    <div className="thirdcomponent">
                    </div>
                </Col>
                <Col size="6" sm="4">
                    <div className="fourthcomponent">
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
    </Styles>
    )
}