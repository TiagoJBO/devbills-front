import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 8px;
 width: 36px;
 height: 36px;
 border-radius: 4px;
 background-color: ${theme.colors.primary};
 border: 0;
 padding: 0;
 transition: all 100ms;

 &:hover {
  background-color: ${theme.colors.primaryDark};

  svg {
   fill: ${theme.colors.black};
   height: 20px;
   width: 48px;
  }
 }
`;
