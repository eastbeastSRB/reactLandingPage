import React from 'react'
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

const Styles = styled.div`
    .soillInformation {
        margin-left: 5%;
    }

    .informationLabel {
        color: #ff4c5f;
        font-weight: bold;
        line-height: 1.5;
        margin-top: 2%;
        font-size: 20px;
    }
`;

export const Home = () => (
    <Styles>
        <div className="soillInformation">
            <h5 className="text-uppercase"> outdoorly partner </h5>
            <h1> SO iLL - Climbing, Holds and Gear</h1>
            <Container>
                <Row>
                    <div className="informationLabel"> 
                        <p> SAVE UP TO 65% </p>
                        <p> FREE SHIPPING </p>
                        <p> 14 CATEGORIES </p>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut volutpat leo. 
                        Suspendisse quam dui, dictum fringilla tincidunt ac, porttitor et urna. 
                        Nullam euismod lacinia leo, cursus suscipit justo varius sit amet. Etiam sollicitudin, e
                        lit ut ultricies vulputate, mi ex auctor tellus, quis porttitor purus arcu id lorem. Fusce vel turpis magna.</p>
                </Row>
            </Container>
        </div>
    </Styles>
)