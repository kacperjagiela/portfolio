import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
    </div>
);

export default Menu;