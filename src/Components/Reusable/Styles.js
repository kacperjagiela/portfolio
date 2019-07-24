import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const BackgroundImg = styled.div`
	background-image: url("${props => props.url}");
	width:100%;
	height:100%;
	background-size: 100%;
	background-repeat:no-repeat;
	filter: grayscale(100%) blur(1px);
	padding-left:-10px;
	border-left:2px solid black;
`;

export const Section = styled.section`
	width:100vw;
	height:60vh;
	min-height:60vh;

	@media screen and (max-width:768px){
		height:40vh;
		min-height:40vh;
	}
`;

export const Sider = styled.div`
	width: 100vw;
	height: 4vh;
	color: #e3e6e4;
	position: fixed;
	font-size:20px;
	top: 0px;
	z-index:2;
	@media screen and (max-width:768px){
		font-size:14px;
	}
	
`;

export const Name = styled.div`
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0, 0.5);
	border: 3px solid #e3e6e4;
	border-radius: 10px;
	color: #e3e6e4;
	font-weight: bold;
	font-size:30px;
	padding: 20px;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%, -50%);
	text-align: center;
	width: 60%;
	z-index: 1;

	@media screen and (max-width:768px){
		font-size:20px;
	}
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
	animation: 0.3s ${keyframes`${fadeIn}`} linear;
`;

export const MenuLink = styled.a`
	float:right;
	margin-right: 10px;
	color: inherit;
	text-decoration: none;
	padding-top:7px;

	@media screen and (max-width:768px){
		padding-top:5px;
	}
`;

export const MenuItem = styled.li`
	width:100%;
	height:32px;
	padding-top:5px;
	padding-bottom:5px;
	padding-right:10px;
	display:inline;
`;
