import * as React from 'react';
import { Main } from './Reusable/Styles';
import Title from './MainPages/Title';
import About from './MainPages/About';
import Projects from './MainPages/Projects';
import Contact from './MainPages/Contact';
import NavigationSider from './Reusable/NavigationSider';

const App = () => (
	<Main>
		<NavigationSider />
		<Title />
		<About />
		<Projects />
		<Contact />
	</Main>
);

export default App;
