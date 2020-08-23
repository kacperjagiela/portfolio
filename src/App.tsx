import React, { useState, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useOnClickOutside from './utils/hooks/useOnClickOutside';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Mainpage from './mainpage/Mainpage';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';
import Menu from './menu/Menu';
import Burger from './burger/Burger';

const App = () => {
    const [open, setOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);
    useOnClickOutside(node, () => setOpen(false));
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} />
                </div>
                <Switch>
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="/" component={Mainpage} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
