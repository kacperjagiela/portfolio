import * as React from 'react';
import { BackgroundImg, Section, Name } from '../Reusable/Styles';
import title from '../../public/backgrounds/title1.jpg';


const Title = () => (
	<Section id="home" style={{ position: 'relative' }}>
		<BackgroundImg url={title} />
		<Name>
			Kacper Jagieła
		</Name>
	</Section>
);

export default Title;
