import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        max-width: 100vw;
        overflow-x: hidden;
        margin: 0;
    }

    html {
        font-size: clamp(7px, -0.875rem + 1.5vw, 10px);;
    }

`
