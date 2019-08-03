import * as React from 'react';
import styled from 'styled-components';
import { BackgroundImg, Section, Name } from '../Reusable/Styles';
import title from '../../public/backgrounds/title1.jpg';

const TitleSection = styled(Section)`
	height:50vh;
	@media screen and (max-width:768px){
		height:40vh;
	}
`;

const Title = () => (
	<TitleSection id="home" style={{ position: 'relative' }}>
		<BackgroundImg url={title} />
		<Name>
			Kacper Jagieła
		</Name>
	</TitleSection>
);

export default Title;
