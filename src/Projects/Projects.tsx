import * as React from 'react';
import { FadeInDiv, Title } from '../styles/common';
import { ProjectsDiv, ProjectImage, ProjectLink } from './Projects.styled';
import projectForecast from '../images/project-forecast.png';
import projectQa from '../images/project-qa.png';

const Projects = () => {
    return (
        <FadeInDiv>
            <Title>Projects:</Title>
            <ProjectsDiv>
                <ProjectLink href="https://kacperjagiela.github.io/qa-app-mongodb">
                    <ProjectImage src={projectQa} alt="project-qa" />
                </ProjectLink>
                <ProjectLink href="https://kacperjagiela.github.io/weather-app/">
                    <ProjectImage src={projectForecast} alt="project-forecast" />
                </ProjectLink>
            </ProjectsDiv>
        </FadeInDiv>
    );
};

export default Projects;
