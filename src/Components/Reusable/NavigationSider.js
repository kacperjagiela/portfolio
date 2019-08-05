import * as React from 'react';
import {
	Menu, MenuItem, MenuLink, Sider,
} from './Styles';

const NavigationSider = () => (
	<Sider>
		<Menu>
			<MenuLink href="/">
				<MenuItem>
					home
				</MenuItem>
			</MenuLink>
			<MenuLink href="/about">
				<MenuItem>
					about
				</MenuItem>
			</MenuLink>
			<MenuLink href="/projects">
				<MenuItem>
					projects
				</MenuItem>
			</MenuLink>
			<MenuLink href="/socials" style={{ marginRight: '60px' }}>
				<MenuItem>
					socials
				</MenuItem>
			</MenuLink>
		</Menu>
	</Sider>
);

export default NavigationSider;
