import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
	width:100vw;
	min-height:35vh;
`;

export const Sider = styled.div`
	width: 100vw;
	height: 4vh;
	position: fixed;
	font-size:20px;
	top: 0px;
	background-color: brown;
`;

export const Main = styled.div`
	width:100%;
	min-height:100vw;
	font-family: 'Roboto', sans-serif;
`;

export const Menu = styled.ul`
	width:100%;
	height:100%;
	list-style: none;
	margin:0;
	padding:0;
`;

export const MenuLink = styled.a`
	float:right;
	margin-right: 10px;
	color: inherit;
	text-decoration: none;
	padding-top:5px;

`;

export const MenuItem = styled.li`
	width:100%;
	height:32px;
	padding-top:5px;
	padding-bottom:5px;
	padding-right:10px;
	display:inline;
`;

