import * as React from 'react';
import { Menu, MenuItem, MenuLink, Sider } from './Styles';

const NavigationSider = () => (
	<Sider>
		<Menu>
		<MenuLink href='#contact'>
				<MenuItem>
					Contact
				</MenuItem>		
			</MenuLink>
			<MenuLink href='#projects'>
				<MenuItem>
					Projects
				</MenuItem>		
			</MenuLink>
			<MenuLink href='#about'>
				<MenuItem>
					About
				</MenuItem>		
			</MenuLink>
			<MenuLink href='#home'>
				<MenuItem>
					Home
				</MenuItem>		
			</MenuLink>
		</Menu>
	</Sider>
);

export default NavigationSider;
