import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        font-family: 'Inter', sans-serif;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    } 
    button{
        cursor: pointer;
    }

:root{
    --white-color: #ffffff;
    --black-color: #000000;
    --white-transparent-color: (0, 0, 0, 0.8);

    --primary-color: #D9AD8B;
    --second-color: #A66838;
    --third-color: #6E4525;
    --fourth-color: #F2E5D7;

    --Title-weight-Bold: 700;
    --Title-weight-Regular: 400;
    --Title-weight-Italic: Italic;

    --Title1-size: 40px;
    --Title2-size: 18px;
    --Title3-size: 14px;
    --Headline-size: 12px;

    --Border-radius: 6px;
}

*{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}

body{
    width: 100%;
    height: 100vh;
    
    overflow-y: overlay;

    ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }

    ::-webkit-scrollbar-thumb {
    background: transparent;

        :hover {
        background-color: var(--primary-color);
        }
    }

    ::-webkit-scrollbar-track {
    background: transparent;
    }
}

svg, button{
    cursor:pointer;
}
`;
