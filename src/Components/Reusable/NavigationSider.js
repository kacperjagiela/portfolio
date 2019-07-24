import * as React from 'react';
import {
	Menu, MenuItem, MenuLink, Sider,
} from './Styles';
import Hamburger from './Hamburger';

class NavigationSider extends React.Component {
	state = {
		collapsed: true,
	}

	handleCollapsing = () => {
		const { collapsed } = this.state;
		this.setState({
			collapsed: !collapsed,
		});
	}

	render() {
		const { collapsed } = this.state;
		if (!collapsed) {
			return (
				<Sider>
					<Menu>
						<Hamburger collapsed={collapsed} handleCollapsing={this.handleCollapsing} />
						<MenuLink href="#contact">
							<MenuItem>
								Contact
							</MenuItem>
						</MenuLink>
						<MenuLink href="#projects">
							<MenuItem>
								Projects
							</MenuItem>
						</MenuLink>
						<MenuLink href="#about">
							<MenuItem>
								About
							</MenuItem>
						</MenuLink>
						<MenuLink href="#home">
							<MenuItem>
								Home
							</MenuItem>
						</MenuLink>
					</Menu>
				</Sider>
			);
		}
		return (
			<Sider>
				<Hamburger collapsed={collapsed} handleCollapsing={this.handleCollapsing} />
			</Sider>
		);
	}
}

export default NavigationSider;
