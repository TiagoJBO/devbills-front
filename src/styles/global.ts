import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
*{
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
}
body{
    -webkit-font-smoothing: antialiaased;
    background-color: ${theme.colors.black};

border-style, input-security,button select{
    font: 1 rem'lexend', sams-serif;
}
h1, h2, p, span, strong, button, label, input{
    line-height: 100%;

}
#root{
    max-width: 1280px;
    margin: 0 auto;
}
 button{
    cursor: pointer;
 }

}`;
