import * as React from 'react';
import {
	AboutTitle, Section, AboutParagraph, Important,
} from '../Reusable/Styles';

const About = () => (
	<Section style={{
		display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
	}}
	>
		<AboutTitle>
			About me
		</AboutTitle>
		<AboutParagraph style={{
			width: '60%', paddingLeft: '20%', paddingRight: '20%', lineHeight: '2.3 rem', textAlign: 'center',
		}}
		>
			I am a passionate
			<Important> junior frontend developer </Important>
			located in
			<Important> Wrocław</Important>
			. Besides being into web technologies I am interested in many other things featuring VR, AR and thing I enjoy the most, chess. I love to plan ahead, learn new skills and develop myself further in them. I like to work as a team where we are able to learn from eachother. My native language is Polish and I am fluent in English.
		</AboutParagraph>
	</Section>
);

export default About;
