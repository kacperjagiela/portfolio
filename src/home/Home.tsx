import React from 'react';
import StyledMainpage from './Home.styled';
import { FadeInDiv, Title } from '../styles/common';
import logo from '../images/logo.png';
import cv from '../images/cv.pdf';

const Mainpage = () => (
    <FadeInDiv>
        <StyledMainpage>
            <img src={logo} alt="Kacper Jagieła - Fullstack developer" />
            <Title>
                Checkout my <a href={cv}>cv</a>
            </Title>
        </StyledMainpage>
    </FadeInDiv>
);

export default Mainpage;
