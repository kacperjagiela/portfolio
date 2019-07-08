import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { App } from './Reusable/Styles';
import NavigationSider from './Reusable/NavigationSider';
import Index from './MainPages/Index';
import About from './MainPages/About';
import Projects from './MainPages/Projects';
import Contact from './MainPages/Contact';

const AppRouter = () => (
	<App>
		<NavigationSider />
		<Switch style={{ float: 'left', height: '100%', width: '90%' }}>
			<Route path='/' exact component={withRouter(Index)} />
			<Route path='/about' component={withRouter(About)} />
			<Route path='/projects' component={withRouter(Projects)} />
			<Route path='/contact' component={withRouter(Contact)} />
		</Switch>
	</App>
);

export default AppRouter;
