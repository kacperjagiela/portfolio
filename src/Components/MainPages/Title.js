import * as React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import zip from '../../public/cv.zip';
import {
	Background1, Section, Name, ResumeButton,
} from '../Reusable/Styles';

const TitleSection = styled(Section)`
	height:95vh;
`;

const Background2 = styled(Background1)`
	animation-direction:alternate-reverse;
	animation-duration:4s;
`;

const Background3 = styled(Background1)`
	animation-duration: 5s;
`;

const Title = () => (
	<TitleSection style={{ position: 'relative' }}>
		<Background1 />
		<Background2 />
		<Background3 />
		<Name>
			<Typist cursor={{ element: '' }}>
				Kacper Jagieła
			</Typist>
			<br />
			<a href={zip}>
				{/* TODO: Add resume */}
				<ResumeButton>
					resume
				</ResumeButton>
			</a>
		</Name>
	</TitleSection>
);

export default Title;
