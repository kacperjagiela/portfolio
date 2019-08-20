import * as React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Main } from './Reusable/Styles';
import Title from './MainPages/Title';
import About from './MainPages/About';
import Projects from './MainPages/Projects';
import Contact from './MainPages/Contact';
import NavigationSider from './Reusable/NavigationSider';

const App = () => (
	<HashRouter basename='/'>
		<Main>
			<NavigationSider />
			<Switch>
				<Route path='/' exact component={Title} />
				<Route path='/about' exact component={About} />
				<Route path='/projects' exact component={Projects} />
				<Route path='/socials' exact component={Contact} />
			</Switch>
		</Main>
	</HashRouter>
);

export default App;
