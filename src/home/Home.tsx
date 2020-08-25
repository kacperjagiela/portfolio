import React from 'react';
import StyledMainpage from './Home.styled';
import { FadeInDiv } from '../styles/common';
import logo from '../images/logo.png';

const Mainpage = () => (
    <FadeInDiv>
        <StyledMainpage>
            <img src={logo} alt="Kacper Jagieła - Fullstack developer" />
            <h1>
                Checkout my <a href="/">cv</a>
            </h1>
        </StyledMainpage>
    </FadeInDiv>
);

export default Mainpage;
