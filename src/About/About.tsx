import * as React from 'react';
import { FadeInDiv, Title } from '../styles/common';
import AboutText from './About.styled';

const About = () => {
    return (
        <FadeInDiv>
            <Title>About me:</Title>
            <AboutText>
                I am a passionate <strong>fullstack</strong> developer located in Wrocław. Besides
                being into web technologies I am interested in VR and chess. I love to{' '}
                <strong>plan</strong> ahead, learn new skills and develop myself further in them. I
                enjoy working as team. My native language is <strong>Polish</strong> and I am fluent
                in <strong>English</strong>
            </AboutText>
        </FadeInDiv>
    );
};

export default About;
