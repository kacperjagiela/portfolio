import React, { useState, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useOnClickOutside from './utils/hooks/useOnClickOutside';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Mainpage from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';
import Menu from './menu/Menu';
import Burger from './burger/Burger';
import Credits from './credits/Credits';

const App = () => {
    const [open, setOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);
    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter basename="/portfolio">
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                </div>
                <Menu open={open} />
                <Switch>
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/credits" component={Credits} />
                    <Route path="/" component={Mainpage} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
