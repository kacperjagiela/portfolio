import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './Mainpage/Mainpage';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Menu from './Navigation/Menu';


const App = () => (
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={Mainpage} />
        </Switch>
    </BrowserRouter>
);

export default App;
