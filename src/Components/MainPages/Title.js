import * as React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import {
	BackgroundImg, Section, Name, ResumeButton,
} from '../Reusable/Styles';
import title from '../../public/backgrounds/title.jpg';

const TitleSection = styled(Section)`
	height:95vh;
`;

const Title = () => (
	<TitleSection style={{ position: 'relative' }}>
		<BackgroundImg url={title} />
		<Name>
			<Typist cursor={{ element: '.' }}>
				Kacper Jagieła
			</Typist>
			<br />
			<a href="pdf">
				{/* TODO: Add resume */}
				<ResumeButton>
					resume
				</ResumeButton>
			</a>
		</Name>
	</TitleSection>
);

export default Title;
