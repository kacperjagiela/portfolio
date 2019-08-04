/* eslint-disable max-len */
import * as React from 'react';
import {
	AboutTitle, Section, AboutParagraph, Skills, Important,
} from '../Reusable/Styles';

const About = () => (
	<Section id="about" style={{ paddingBottom: '1vh' }}>
		<AboutTitle>
			About me
		</AboutTitle>
		<AboutParagraph style={{ textAlign: 'center' }}>
			I am a passionate
			<Important> junior frontend developer </Important>
			located in <span style={{ color: '#68A063' }}>Wrocław</span>. I am currently looking for first real job. My interests are: web technologies, VR, AR. My hobby is reading books. Skills in which I feel confident:
			<br />
			<Skills>
				<li>
					<p>HTML5</p>
				</li>
				<li>
					<p>CSS3</p>
				</li>
				<li>
					<p>Javascript</p>
				</li>
				<li>
					<p>React (styled-components, react-router)</p>
				</li>
				<li>
					<p>GIT</p>
				</li>
				<li>
					<p>Node.js</p>
				</li>
			</Skills>
		</AboutParagraph>
	</Section>
);

export default About;
