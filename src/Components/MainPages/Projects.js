/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import styled from 'styled-components';
import {
	Section, AboutTitle, AboutParagraph, ProjectsContainer, ProjectsItem,
} from '../Reusable/Styles';
import projectbg from '../../public/backgrounds/projects.png';

const ProjectsDiv = styled(Section)`
	background-image: url("${projectbg}");
	background-size: 100% 100%;
	padding-top: 4vh;
	padding-bottom: 6vh;

	@media screen and (max-width:768px){
		padding-top:2vh;
		padding-bottom:0;
	}
`;

const Projects = () => (
	<ProjectsDiv id="projects">
		<AboutTitle>
			Projects
		</AboutTitle>
		<AboutParagraph style={{ textAlign: 'center' }}>
			You can find all of my projects on my <a href='http://github.com/kacperjagiela' style={{ color: 'inherit' }}>github</a>
		</AboutParagraph>
		<ProjectsContainer>
			<a href="https://github.com/kacperjagiela/news-app" style={{ width: '30%', paddingRight: '3%' }}>
				<ProjectsItem src="https://via.placeholder.com/150" alt="news-app" style={{ height: '95%' }} />
			</a>
			<a href="https://github.com/kacperjagiela/news-app" style={{ width: '30%', paddingRight: '3%' }}>
				<ProjectsItem src="https://via.placeholder.com/150" alt="news-app" style={{ height: '95%' }} />
			</a>
			<a href="https://github.com/kacperjagiela/news-app" style={{ width: '30%' }}>
				<ProjectsItem src="https://via.placeholder.com/150" alt="news-app" style={{ height: '95%' }} />
			</a>
			
		</ProjectsContainer>
	</ProjectsDiv>
);

export default Projects;
