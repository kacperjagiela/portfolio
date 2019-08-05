import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const AboutTitle = styled.div`
	width:100%;
	font-size:3rem;
	padding-bottom: 1vw;
    font-family: 'Grenze', serif;
	text-align: center;
	color:#ecf0f1;
	padding-top:10px;
	animation: 1s ${keyframes`${fadeIn}`} ease;

`;

export const AboutParagraph = styled.div`
	width:100%;
	color:#ecf0f1;
	font-size:1.5rem;
    font-family: 'Oswald', sans-serif;
	text-align: justify;
	animation: 1s ${keyframes`${fadeIn}`} ease;
`;

export const BackgroundImg = styled.div`
	background-image: url("${props => props.url}");
	width:100%;
	height:100%;
	background-size: 100% 100%;
	background-repeat:no-repeat;
	filter: grayscale(100%);
	padding-left:-10px;
	border-left:2px solid black;
`;

export const Important = styled.span`
	font-weight: bold;
`;

export const Section = styled.section`
	width:100vw;
	min-height:95vh;
	padding-top: 5vh;
	background: rgb(255, 255, 255);
	background: linear-gradient(115deg, #2c3e50 50%, #34495e 50%);
`;

export const Sider = styled.div`
	width: 100vw;
	min-height: 4vh;
	color: #e3e6e4;
	background-color:#303033;
	position: fixed;
	font-size:20px;
	top: 0px;
	z-index:2;
`;

export const Name = styled.div`
	color: #e3e6e4;
    font-family: 'Saira Stencil One', cursive;
	font-weight: bold;
	font-size:4rem;
	position:absolute;
	top:50%;
	left:50%;
	text-shadow: 2.5px 2.5px #000000
	transform:translate(-50%, -50%);
	text-align: center;
	width: 60%;
	z-index: 1;
`;

export const Main = styled.div`
	width:100%;
	position: relative;
	font-family: 'Roboto', sans-serif;
`;

export const Menu = styled.ul`
	width:80%;
	padding-right:10%;
	padding-left:10%;
	display:flex;
	list-style: none;
	background: #303033;
	opacity: 0.9;
	float:right;
	margin:0;
	animation: 0.5s ${keyframes`${fadeIn}`} ease;
`;

export const MenuLink = styled.a`
	margin-right: 10px;
	color: inherit;
	text-align:center;
	flex-grow: 1;
	padding-top:9px;
	padding-bottom:12px;
	font-size:2rem;
	text-decoration: none;
	border:1px solid transparent;
	border-radius:5px;
	transition: color 0.5s;

	&:hover{
		color: #484b99;
		transition: all 0.5s ease;
	}

	@media screen and (max-width:767px){
		padding-top:5px;
		font-size:3vw;
	}
`;

export const MenuItem = styled.li`
	width:100%;
	padding:10px;
	display:inline;

	@media screen and (max-width:767px){
		padding-top:5px;
		font-size:4vw;
	}	
`;

export const ProjectsContainer = styled.div`
	width:80%;
	padding-top:10px;
	padding-left:10%;
	padding-right:10%;
	display:flex;
	flex-wrap:wrap;
	animation: 1s ${keyframes`${fadeIn}`} ease;
`;

export const ProjectLink = styled.a`
	width: 30%
	height:100%;
	margin-right: 3%

	@media screen and (max-width:768px){
		width:50%;
		height:40%;
		margin-top:1vh;
		margin-bottom:1vh;
		margin-right:25%;
		margin-left:25%;
	}
`;

export const ProjectsItem = styled.img`
	width:100%;
	flex-grow: 2;
`;

export const ResumeButton = styled.button`
	border: 2px solid ;
	border-bottom-width:4px;
	color: #34495e;
	border-radius:2px;
	font-size:2rem;
	background-color: #1e272e;
	padding:10px;
	cursor:pointer;
	transition:border-color 0.3s, color 0.3s, background-color 0.3s;
	animation: 1s ${keyframes`${fadeIn}`} ease;

	&:hover{
		background-color: #34495e;
		border-color: #1e272e;
		color:#1e272e;
		transition: 0.3s all ease-in;
	}
`;
