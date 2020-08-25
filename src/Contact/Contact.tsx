import * as React from 'react';
import { FadeInDiv, Title } from '../styles/common';
import ContactLinks from './Contact.styled';

const Contact = () => {
    return (
        <FadeInDiv>
            <Title>Contact:</Title>
            <ContactLinks>
                <h2>
                    <a href="tel:+48783890500">(+48) 783 890 500</a>
                </h2>
                <h2>
                    <a href="mailto:jagielakacper80@gmail.com">jagielakacper80@gmail.com</a>
                </h2>
                <h2>
                    <a href="https://github.com/kacperjagiela">github.com/kacperjagiela</a>
                </h2>
                <h2>
                    <a href="https://linkedin.com/in/kacper-jagieła">
                        linkedin.com/in/kacper-jagieła
                    </a>
                </h2>
            </ContactLinks>
        </FadeInDiv>
    );
};

export default Contact;
