/* eslint-disable react/jsx-indent */
import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = styled.div`
	width: 30px;
	height: 4px;
	background-color: white;
	margin: 4px 0;
	transition: 0.4s;
`;

const HamburgerContainer = styled.div`
	display: inline-block;
	cursor: pointer;
	z-index: 3;
	position: absolute;
	right: 8px;
	padding: 4px;
`;

const Hamburger = ({ collapsed, handleCollapsing }) => (
	<HamburgerContainer
		onClick={handleCollapsing}
		onKeyPress={handleCollapsing}
		role="button"
		tabIndex="0"
		style={{ background: !collapsed ? 'rgb(0,0,0,0.0)' : 'rgb(192,57,43, 0.9)' }}
	>
		<Bar style={{ transform: !collapsed ? 'rotate(-45deg) translateX(-6px) translateY(5px)' : 'none' } } />
		<Bar style={{ opacity: !collapsed ? '0' : '1' }} />
		<Bar style={{ transform: !collapsed ? 'rotate(45deg) translateX(-6px) translateY(-5px)' : 'none' }} />
	</HamburgerContainer>
);

Hamburger.propTypes = {
	collapsed: PropTypes.bool.isRequired,
	handleCollapsing: PropTypes.func.isRequired,
};

export default Hamburger;
