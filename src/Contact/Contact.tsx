import * as React from 'react';
import { FadeInDiv, Title } from '../styles/common';
import { ContactLinks, ContactIcon } from './Contact.styled';
import phoneIcon from '../images/flaticons/phone.png';
import mailIcon from '../images/flaticons/mail.png';
import githubIcon from '../images/flaticons/github.png';
import linkedinIcon from '../images/flaticons/linkedin.png';

const Contact = () => {
    return (
        <FadeInDiv>
            <Title>Contact:</Title>
            <ContactLinks>
                <h2>
                    <a href="tel:+48783890500">
                        <ContactIcon src={phoneIcon} alt="phone-icon" />
                        (+48) 783 890 500
                    </a>
                </h2>
                <h2>
                    <a href="mailto:jagielakacper80@gmail.com">
                        <ContactIcon src={mailIcon} alt="phone-icon" />
                        jagielakacper80@gmail.com
                    </a>
                </h2>
                <h2>
                    <a href="https://github.com/kacperjagiela">
                        <ContactIcon src={githubIcon} alt="phone-icon" />
                        github.com/kacperjagiela
                    </a>
                </h2>
                <h2>
                    <a href="https://linkedin.com/in/kacper-jagieła">
                        <ContactIcon src={linkedinIcon} alt="phone-icon" />
                        linkedin.com/in/kacper-jagieła
                    </a>
                </h2>
            </ContactLinks>
        </FadeInDiv>
    );
};

export default Contact;
