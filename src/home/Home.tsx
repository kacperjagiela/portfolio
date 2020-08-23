import React from 'react';
import StyledMainpage from './Home.styled';
import { FadeInDiv } from '../styles/common';

const Mainpage = () => (
    <FadeInDiv>
        <StyledMainpage>
            <h1>Hello, my name is Kacper</h1>
            <h1>And I am an aspiring fullstack developer</h1>
            <h1>
                Checkout my <a href="/">cv</a>
            </h1>
        </StyledMainpage>
    </FadeInDiv>
);

export default Mainpage;
