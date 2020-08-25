import * as React from 'react';
import { FadeInDiv, Title } from '../styles/common';
import AboutText from './About.styled';

const About = () => {
    return (
        <FadeInDiv>
            <Title>About me:</Title>
            <AboutText>
                I am a passionate fullstack developer located in Wrocław. Besides being into web
                technologies I am interested in VR and chess. I love to plan ahead, learn new skills
                and develop myself further in them. I enjoy working as team. My native language is
                Polish and I am fluent in English.
            </AboutText>
        </FadeInDiv>
    );
};

export default About;
