import { createGlobalStyle } from "styled-components";

/* Global */
const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Gothic A1';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/gothica1/v8/CSR94z5ZnPydRjlCCwl6aaU4Qt0V05ZAcgT3T1VKO2vL6LbP.0.woff2') format('woff2');
        unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
    }

    :root {
        /* Color */
        --color-white: #ffffff;
        --color-light-white: #eeeeee;
        --color-dark-white: #bdbdbd;
        --color-pink: #fe918d;
        --color-dark-pink: #FF63B1;
        --color-dark-grey: #cdcdcd;
        --color-grey: #616161;
        --color-light-grey: #7c7979;
        --color-blue: #73aace;
        --color-dark-blue: #1909ee;
        --color-yellow: #fff7d1;
        --color-light-yellow: #F6F4F1;
        --color-orange: #feb546;
        --color-black: #000000;
        --color-dark-purple: #272C52;

        /* Font size */
        --font-large: 48px;
        --font-medium: 28px;
        --font-regular: 18px;
        --font-small: 16px;
        --font-micro: 14px;

        /* Font weight */
        --weight-bold: 700;
        --weight-semi-bold: 600;
        --weight-regular: 400;

        /* Size */
        --size-border-radius: 6px;

        /* Animation Duration */
        --animation-duration: 200ms;
    }

    /* Universal tags*/
* {
    box-sizing: border-box;
}

body {
    margin: 0 auto;
    cursor: default;
    font-family: 'Gothic A1', sans-serif;
    background-color: var(--color-light-yellow);
}

a {
    text-decoration: none;
    color: var(--color-white);
}

ul {
    padding-left: 0;
}

li {
    list-style: none;
}

button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
}

/* Typography */

h1 {
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: var(--color-black);
    margin: 16px 0px;
}

h2 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: var(--color-black);
    margin: 8px 0;
}

h3 {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-black);
    margin: 8px 0;
}

p {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-black);
    margin: 4px 0;
}
`;

export default GlobalStyle;