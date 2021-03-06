import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        display:flex;
        justify-content: center;
        align-items: center;
        text-align:center;
        min-height:100vh;
        width:100%;
    }

    #root{
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

export default GlobalStyles;
