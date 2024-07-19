import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 6px;

 h2 {
  font-size: 20px;
  color: ${theme.colors.white};
  font-weight: 700;
 }
 span {
  font-size: 14px;
  color: ${theme.colors.neutral};
  font-weight: 400;
 }
`;
