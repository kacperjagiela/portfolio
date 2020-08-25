import * as React from 'react';
import { FadeInDiv, Title } from '../styles/common';
import CreditsList from './Credits.styled';

const Credits = () => {
    return (
        <FadeInDiv>
            <Title>Credits:</Title>
            <CreditsList>
                <h3>
                    Icons made by{' '}
                    <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
                        Pixel perfect
                    </a>{' '}
                    from{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        www.flaticon.com
                    </a>
                </h3>
                <h3>
                    Icons made by{' '}
                    <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">
                        Those Icons
                    </a>{' '}
                    from{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        {' '}
                        www.flaticon.com
                    </a>
                </h3>
            </CreditsList>
        </FadeInDiv>
    );
};

export default Credits;
