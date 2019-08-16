import React from 'react';
import styled from 'styled-components';


const Style = styled.div`
    .footer {
        height: 46px;
        background: #F8F8F8 0% 0% no-repeat padding-box;
        opacity: 1;
        padding: 15px 100px;
    }

    .doorly {
        width: 134px;
        height: 14px;
        text-align: left;
        font: Regular 12px/14px Rubik;
        font-size: 12px;
        letter-spacing: 1.8px;
        color: #231F20;
        text-transform: uppercase;
        opacity: 1;
        float: left;
    }

    .terms {
        width: 122px;
        height: 14px;
        text-align: left;
        font: Regular 12px/14px Rubik;
        font-size: 12px;
        letter-spacing: 1.8px;
        color: #231F20;
        text-transform: uppercase;
        opacity: 0.5;
        float: right;

    }


`;

export const Footer = () => (
    <Style>
        <div className="footer">
            <p className="doorly"> &#169;  OUTDOORLY </p>
            <a href="/#"> <p className="terms"> TERMS | PRIVACY  </p> </a>
        </div>
    </Style>
)