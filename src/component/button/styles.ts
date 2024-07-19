/* eslint-disable prettier/prettier */
import {css,styled } from 'styled-components';

import { theme } from   '../../styles/theme'

type CantainerProps = {
 $variant: 'default' | 'outline',
};

export const Container =styled.button<CantainerProps>`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 36px;
 border-radius: 4px;
 background-color: ${(props)=>props.$variant === 'default' ? theme.colors.primary : 'transparent'};
 color: ${(props) =>
  props.$variant === 'default' ? theme.colors.black : theme.colors.primary};
 border: 0;
 padding: 0 12px;
 transition: all 100ms;
${(props)=>props.$variant === 'outline' && css` border: 1px solid${theme.colors.primary}` }



 &:hover {
  background-color: ${theme.colors.primaryDark};

 }
`;
