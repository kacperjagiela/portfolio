/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import styled from 'styled-components';
import {
	Section, AboutTitle, AboutParagraph, ProjectsContainer, ProjectsItem,
} from '../Reusable/Styles';
import project1 from '../../public/backgrounds/project1.png';
import project2 from '../../public/backgrounds/project2.png';
import project3 from '../../public/backgrounds/project3.png';

const ProjectsDiv = styled(Section)`
	background-size: 100% 100%;
	padding-top: 4vh;
	padding-bottom: 6vh;
	min-height:50vh;

	@media screen and (max-width:768px){
		padding-top:2vh;
		padding-bottom:0;
		min-height:30vh;
	}
`;

const Projects = () => (
	<ProjectsDiv id="projects">
		<AboutTitle>
			Projects
		</AboutTitle>
		<AboutParagraph style={{ textAlign: 'center' }}>
			You can find all of my projects on my <a href='http://github.com/kacperjagiela' style={{ color: 'rgb(192,57,43)' }}>github</a>
		</AboutParagraph>
		<ProjectsContainer>
			<a href="https://github.com/kacperjagiela/news-app" style={{ width: '30%', marginRight: '3%' }}>
				<ProjectsItem src={project3} alt="news-app" style={{ height: '100%' }} />
			</a>
			<a href="https://github.com/kacperjagiela/qa-app" style={{ width: '30%', marginRight: '3%' }}>
				<ProjectsItem src={project1} alt="news-app" style={{ height: '100%' }} />
			</a>
			<a href="https://github.com/kacperjagiela/portfolio" style={{ width: '30%' }}>
				<ProjectsItem src={project2} alt="news-app" style={{ height: '100%' }} />
			</a>
		</ProjectsContainer>
	</ProjectsDiv>
);

export default Projects;
