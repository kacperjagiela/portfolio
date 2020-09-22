import * as React from 'react';
import StyledBurger from './Burger.styled';
import { FadeInDiv } from '../styles/common';

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Burger = ({ open, setOpen }: Props) => {
    return (
        <FadeInDiv>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </FadeInDiv>
    );
};

export default Burger;
