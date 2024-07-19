/* eslint-disable prettier/prettier */

import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
type ContainerProps = {
 $variant: 'balance' | 'incomes' | 'expenses',
};

const variantColorMap = {
 balance: theme.colors.info,
 incomes: theme.colors.success,
 expenses: theme.colors.error,
};

export const Container = styled.div<ContainerProps>`
 display: flex;
 flex-direction: column;
 padding: 16px;
 gap: 8;
 background-color: ${theme.colors.dark};
 border-radius: 4px;
 width: 100%;

 svg {
  width: 28px;
  height: 28px;
  fill: ${(props) => variantColorMap[props.$variant]};
 }
 span {
  font-size: 16px;
  font-weight: 300;
  color: ${theme.colors.neutral};
 }

 strong {
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => variantColorMap[props.$variant]}
 }
`;
