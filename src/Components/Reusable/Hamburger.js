/* eslint-disable react/jsx-indent */
import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = styled.div`
	width: 40px;
	height: 5px;
	background-color: white;
	margin: 6px 0;
	transition: 0.4s;
`;

const HamburgerContainer = styled.div`
	height:5vh;
	display: inline-block;
	cursor: pointer;
	z-index: 3;
	position: absolute;
	padding:4px;
	padding-top:6px;
	badding-bottom:1px;
	right:14px;
`;

const Hamburger = ({ collapsed, handleCollapsing }) => (
	<HamburgerContainer
		onClick={handleCollapsing}
		onKeyPress={handleCollapsing}
		role="button"
		tabIndex="0"
		style={{ background: 'rgb(0,0,0,0.0)' }}
	>
		<Bar style={{ transform: !collapsed ? 'rotate(-45deg) translateX(-9px) translateY(6px)' : 'none' }} />
		<Bar style={{ opacity: !collapsed ? '0' : '1' }} />
		<Bar style={{ transform: !collapsed ? 'rotate(45deg) translateX(-9px) translateY(-6px)' : 'none' }} />
	</HamburgerContainer>
);

Hamburger.propTypes = {
	collapsed: PropTypes.bool.isRequired,
	handleCollapsing: PropTypes.func.isRequired,
};

export default Hamburger;
