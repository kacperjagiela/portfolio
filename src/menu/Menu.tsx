import * as React from 'react';
import { Link } from 'react-router-dom';
import StyledMenu from './Menu.styled';

interface Props {
    open: boolean;
}

const Menu = ({ open }: Props) => (
    <StyledMenu open={open}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/credits">Credits</Link>
    </StyledMenu>
);

export default Menu;
