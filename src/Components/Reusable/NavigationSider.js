import * as React from 'react';
import {
	Menu, MenuItem, MenuLink, Sider,
} from './Styles';

const NavigationSider = () => (
	<Sider>
		<Menu>
			<MenuLink to="/">
				<MenuItem>
					Home
				</MenuItem>
			</MenuLink>
			<MenuLink to="/about">
				<MenuItem>
					About
				</MenuItem>
			</MenuLink>
			<MenuLink to="/projects">
				<MenuItem>
					Projects
				</MenuItem>
			</MenuLink>
			<MenuLink to="/socials" style={{ marginRight: '60px' }}>
				<MenuItem>
					Socials
				</MenuItem>
			</MenuLink>
		</Menu>
	</Sider>
);

export default NavigationSider;
