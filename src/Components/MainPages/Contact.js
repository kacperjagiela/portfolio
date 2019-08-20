import * as React from 'react';
import { Section, AboutTitle, AboutParagraph } from '../Reusable/Styles';

const contactStyle = {
	width: '100%',
	textAlign: 'center',
	paddingLeft: '0px',
};

const iconStyle = {
	fontSize: '3rem',
	verticalAlign: 'middle',
	marginRight: '10px',
};

const Contact = () => (
	<Section style={{
		display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
	}}
	>
		<AboutTitle>
			Socials
		</AboutTitle>
		<AboutParagraph style={contactStyle}>
			<p>
				<i className="fab fa-github" style={iconStyle} />
				<a href='https://github.com/kacperjagiela' style={{ color: 'inherit' }}>github.com/kacperjagiela</a>
			</p>
			<p>
				<i className="fas fa-envelope" style={iconStyle} />
				<a href='mailto:jagielakacper80@gmail.com' style={{ color: 'inherit' }}>jagielakacper80@gmail.com</a>
			</p>
			<p>
				<i className="fab fa-linkedin" style={iconStyle} />
				<a href='https://linkedin.com/in/kacper-jagieła' style={{ color: 'inherit' }}>linkedin.com/in/kacper-jagieła</a>
			</p>
		</AboutParagraph>
	</Section>
);

export default Contact;
