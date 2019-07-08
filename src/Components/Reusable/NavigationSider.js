import * as React from 'react';
import { Menu, MenuItem, MenuLink } from './Styles';
import home from '../../public/icons/home.svg';
import contact from '../../public/icons/contact.svg';
import about from '../../public/icons/about.svg';
import projects from '../../public/icons/projects.svg';


const NavigationSider = () => (
	<div style={{
		width: '10%', height: '100vh', float: 'left',
	}}>
		<Menu>
			<MenuItem>
				<MenuLink href='/'>
					jeden
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink href='/about'>
					dwa
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink href='/projects'>
					trzy
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink href='/contact'>
					cztery
				</MenuLink>
			</MenuItem>
		</Menu>
	</div>
);

export default NavigationSider;
