import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import media from 'styled-media-query';
import climbWall from '../assets/climbWall.jpg';
import outdoorlyLogo from '../assets/outdoorlyLogo.png';
import soilllogo from '../assets/soilllogo.png';

const Styles = styled.div`
    .homeSectionWall {
        background: url(${climbWall}) 0% 0% no-repeat padding-box;
        opacity: 1;
        background-size: cover;
        color: #efefef;
        padding-bottom: 161px;
        position: relative;
        
    }

    .homeSectionDiv {
        text-align: center;
        margin-top: 151px;
    }

    .homeTxt {
        font-size: 70px;
    }
    .logo1 {
        width: 200px;
        height: 51px;
        margin-left: 31%;
        margin-bottom: 40px;
        background: transparent url(${outdoorlyLogo}) 0% 0% no-repeat padding-box;
        opacity: 1;
        padd
    }
    .logo2 {
        background: url(${soilllogo}) 0% 0% no-repeat padding-box;
        width: 170px;
        height: 39px;
        margin-top: 6px;
        margin-left: 3%;
    }

    .logos {
        display: flex;
    }
`;

const MediaQuery = styled.div`
    ${media.lessThan('small')`
        .jumbo {
            width: 100%;
        }
        .signUpBtn {
            
        }
        .homeSectionWall {
            margin-left: -145%;
            height: 444px;
        }
        .homeSectionDiv {
            margin-top: 85px;
            margin-left: 43%;

        }
        .homeTxt {
            font-size: 50px;
            padding-left: 30%;
        }
    `}
`;

export const Jumbotron = () => (
    <MediaQuery>
    <Styles>
        <Jumbo fluid className="homeSectionWall">
            <Container>
                <div className="homeSectionDiv">
                    <div className="logos">
                        <div className="logo1"></div>
                        <div className="logo2"></div>
                    </div>
                    <h1 className="homeTxt"> LET'S TAKE HOLD </h1>
                    <h1 className="homeTxt"> TOGETHER </h1>
                </div>
            </Container>
        </Jumbo>
    </Styles>
    </MediaQuery>
)