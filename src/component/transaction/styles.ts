/* eslint-disable prettier/prettier */
import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
type ContentType = {
 $variant: 'income' | 'expense',
 $tagColor: string,
};

const variantColorMap = {
 income: theme.colors.success,
 expense: theme.colors.error,
};

export const Container = styled.div`
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 position: relative;
 padding: 12px 0;

 span {
  font-size: 12px;
  font-weight: 300;
  color: ${theme.colors.neutral};
  line-height: 110%;
 }

 &::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 1px;
  width: 5%;
  background-color: ${theme.colors.neutral};
 }
`;

export const Info = styled.div`
 display: flex;
 align-items: flex-start;
 gap: 8px;

 div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
 }

 strong {
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.light};
 }

 span {
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.neutral};
 }
`;
export const Content =
 styled.div <
 ContentType >
 `
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 gap: 4px;

 strong {
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => variantColorMap[props.$variant]};
 }
 span {
  font-size: 10px;
  font-weight: 400;
  border: 1px solid ${(props) => props.$tagColor};
  color: ${(props) => props.$tagColor};
 }
`;
