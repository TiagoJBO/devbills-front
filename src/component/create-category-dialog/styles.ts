import styled from 'styled-components';

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

  div {
   display: grid;
   grid-template-columns: auto auto;
   gap: 16px;
  }
 }

 footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
 }
`;
