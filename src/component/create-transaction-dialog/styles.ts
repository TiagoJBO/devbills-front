import { InputNumberFormat } from '@react-input/number-format';
import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: normal;
 gap: 1.5rem;

 form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
 }

 footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
 }
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;
`;

export const InputGroup = styled.div`
 display: flex;
 flex-direction: column;
 gap: 4px;

 label {
  color: ${theme.colors.white};
  font-size: 10px;
 }

 select {
  height: 36px;
  border-radius: 4px;
  padding: 0 12px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.neutral};
  border: 1px solid transparent;
  transform: all 100ms;

  &:focus {
   border-color: ${theme.colors.primary};
  }
 }
`;

export const CurrencyInput = styled(InputNumberFormat)`
 height: 36px;
 background-color: ${theme.colors.black};
 border: none;
 border-radius: 4px;
 padding: 0 12px;
 color: ${theme.colors.neutral};
 font-size: 16px;
 width: 100%;
 border: 1px solid transparent;
 transform: all 100ms;

 &:focus {
  border-color: ${[theme.colors.primary]};
 }
 &::placeholder {
  color: ${theme.colors.neutral};
 }
`;

export const RadioForm = styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;
`;

export const RadioGroup = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;

 input {
  width: 16px;
  height: 16px;
  accent-color: ${theme.colors.primary};
 }

 label {
  color: ${theme.colors.white};
  font-size: 14px;
 }
`;
export const ErrorMessage = styled.span`
 margin-top: 0.125rem;
 font-size: 0.625rem;
 line-height: 88%;
 color: ${theme.colors.error};
`;
