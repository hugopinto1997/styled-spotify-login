import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

html {
    box-sizing: border-box;
    font-size: 10px;
}

*,
::before,
::after {
    box-sizing: inherit;
}

body {
    font-family: "Roboto", sans-serif;
}
`;

export default GlobalStyles;
