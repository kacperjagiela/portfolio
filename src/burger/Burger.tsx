import * as React from 'react';
import StyledBurger from './Burger.styled';

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Burger = ({ open, setOpen }: Props) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;
