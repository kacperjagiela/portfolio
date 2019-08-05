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
			about me
		</AboutTitle>
		<AboutParagraph style={{
			width: '60%', paddingLeft: '20%', paddingRight: '20%', lineHeight: '2.3 rem', textAlign: 'center',
		}}
		>
			I am a passionate
			<Important> junior frontend developer </Important>
			located in
			<Important> Wrocław</Important>
			. I am currently looking for first real job. My interests are: web technologies, VR, AR. My hobby is reading books and studying new things.
			Ever since I was a kid, I would always dream about creating something everyone would enjoy using and looking at.
			That is why I decided to learn how to create modern, responsive websites.
		</AboutParagraph>
	</Section>
);

export default About;
