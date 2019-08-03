import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const AboutTitle = styled.div`
	width:70%;
	font-size:3.5vw;
	font-family: 'Saira Stencil One', cursive;
	text-align: center;
	color:#ecf0f1;
	padding-left:15%;
	padding-top:10px;

	@media screen and (max-width:768px){
		font-size:5vw;
	}
`;

export const AboutParagraph = styled.div`
	width:70%;
	color:#ecf0f1;
	padding-left:15%;
	font-size:2vw;
    font-family: 'Oswald', sans-serif;;
	text-align: justify;

	@media screen and (max-width:768px){
		font-size:3.5vw;
	}
`;

export const BackgroundImg = styled.div`
	background-image: url("${props => props.url}");
	width:100%;
	height:100%;
	background-size: cover;
	background-repeat:no-repeat;
	filter: grayscale(100%) blur(1px);
	padding-left:-10px;
	border-left:2px solid black;
`;

export const Section = styled.section`
	width:100vw;
	min-height:50vh;
	background: #000000;
	background: -webkit-linear-gradient(to right, #434343, #000000);
	background: linear-gradient(to left, #434343, #000000);

	@media screen and (max-width:768px){
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

export const Skills = styled.ul`
	font-size: 1.5vw;
	width:40%;
	padding-left:30%;
	@media screen and (max-width:768px){
		font-size:2.7vw;
	}
`;

export const Name = styled.div`
	color: #e3e6e4;
    font-family: 'Roboto', sans-serif;
	font-weight: bold;
	font-size:5vw;
	position:absolute;
	top:50%;
	left:50%;
	text-shadow: 2.5px 2.5px #000000
	transform:translate(-50%, -50%);
	text-align: center;
	width: 60%;
	z-index: 1;

	@media screen and (max-width:768px){
		font-size:7.5vw;
	}
`;

export const Main = styled.div`
	width:100%;
	min-height:100vw;
	position: relative;
	font-family: 'Roboto', sans-serif;
`;

export const Menu = styled.ul`
	width:100%;
	min-height:100%;
	display:table;
	list-style: none;
	background: #c0392b;
	opacity: 0.9;
	float:right;

	margin:0;
	padding:0;
	animation: 0.35s ${keyframes`${fadeIn}`} ease-in-out;
`;

export const MenuLink = styled.a`
	float:right;
	margin-right: 10px;
	color: inherit;
	text-decoration: none;
	padding-top:7px;
	padding-bottom:5px;
	font-size:2vw;
	text-decoration: underline;
	border:1px solid transparent;
	border-radius:5px;

	&:hover{
		background: #555;
	}

	@media screen and (max-width:768px){
		padding-top:5px;
		font-size:3vw;
	}
`;

export const MenuItem = styled.li`
	width:100%;
	height:32px;
	padding:10px;
	display:inline;

	@media screen and (max-width:768px){
		padding-top:5px;
		font-size:4vw;
	}	
`;

export const ProjectsContainer = styled.div`
	width:80%;
	padding-top:10px;
	padding-left:10%;
	display:flex;
	flex-wrap:wrap;
`;

export const ProjectsItem = styled.img`
	width:100%;
	flex-grow: 1;
`;
