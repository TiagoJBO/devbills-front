import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 24px;
 width: 100%;
 div {
  display: flex;
  align-items: center;
  gap: 8px;
 }
`;

export const Main = styled.main`
 display: flex;
 gap: 12px;
 width: 100%;
 padding: 024px 24px 24px;
`;

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 gap: 12px;
 width: 100%;
`;
export const Filter = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
`;

export const InputGroup = styled.div`
 display: flex;
 align-items: flex-end;
 max-width: 360px;
 width: 100%;
 gap: 8px;
`;

export const Balance = styled.div`
 display: flex;
 align-items: center;
 gap: 12px;
 width: 100%;
`;
export const ChartContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 16px;
 background-color: ${theme.colors.dark};
 border-radius: 4px;
 gap: 12px;

 header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
 }
`;
export const ChartContent = styled.div`
 height: 236px;
`;

export const ChartAction = styled.div`
 display: flex;
 align-items: flex-end;
 width: 128px;
 gap: 8px;
`;

export const Aside = styled.aside`
 min-width: 360px;
 display: flex;
 flex-direction: column;
 gap: 12px;
 padding: 16px;
 border-radius: 4px;
 background-color: ${theme.colors.dark};

 header {
  display: flex;
  flex-direction: column;
  gap: 16px;
 }
`;

export const SearchTransition = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
`;
export const TransactionGroup = styled.div`
 display: flex;
 flex-direction: column;
 padding: 0 12px;
`;
