import * as React from 'react';
import { FadeInDiv, Title } from '../styles/common';
import { ContactLinks, ContactIcon } from './Contact.styled';
import mailIcon from '../images/flaticons/mail.png';
import githubIcon from '../images/flaticons/github.png';
import linkedinIcon from '../images/flaticons/linkedin.png';

const Contact = () => {
    return (
        <FadeInDiv>
            <Title>Contact:</Title>
            <ContactLinks>
                <h2>
                    <a href="https://github.com/kacperjagiela">
                        <ContactIcon src={githubIcon} alt="github-icon" />
                        github.com/kacperjagiela
                    </a>
                </h2>
                <h2>
                    <a href="mailto:jagielakacper80@gmail.com">
                        <ContactIcon src={mailIcon} alt="mail-icon" />
                        jagielakacper80@gmail.com
                    </a>
                </h2>
                <h2>
                    <a href="https://linkedin.com/in/kacper-jagieła">
                        <ContactIcon src={linkedinIcon} alt="linkedin-icon" />
                        linkedin.com/in/kacper-jagieła
                    </a>
                </h2>
            </ContactLinks>
        </FadeInDiv>
    );
};

export default Contact;
