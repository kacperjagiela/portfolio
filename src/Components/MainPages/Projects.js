/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import {
	Section, AboutTitle, AboutParagraph, ProjectsContainer, ProjectsItem, ProjectLink,
} from '../Reusable/Styles';
import project1 from '../../public/backgrounds/project1.png';
import project2 from '../../public/backgrounds/project2.png';
import project3 from '../../public/backgrounds/project3.png';

const Projects = () => (
	<Section style={{
		display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', overflow: 'auto', paddingTop: '5vh',
	}}
	>
		<AboutTitle>
			projects
		</AboutTitle>
		<AboutParagraph style={{ textAlign: 'center' }}>
			You can find all of my projects on my <a href='http://github.com/kacperjagiela' style={{ color: 'inherit' }}>github</a>
		</AboutParagraph>
		<ProjectsContainer>
			<ProjectLink href="https://github.com/kacperjagiela/news-app">
				<ProjectsItem src={project3} alt="news-app" style={{ height: '100%' }} />
			</ProjectLink>
			<ProjectLink href="https://github.com/kacperjagiela/qa-app">
				<ProjectsItem src={project1} alt="news-app" style={{ height: '100%' }} />
			</ProjectLink>
			<ProjectLink href="https://github.com/kacperjagiela/portfolio">
				<ProjectsItem src={project2} alt="news-app" style={{ height: '100%' }} />
			</ProjectLink>
		</ProjectsContainer>
	</Section>
);

export default Projects;
