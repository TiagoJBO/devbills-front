/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
 $variant: 'black' | 'dark',
};
export const Container =styled.div<ContainerProps>`
 display: flex;
 flex-direction: column;
 gap: 2px;
 width: 100%;

 label{
    color:${theme.colors.white};
    padding: 0;
    font-size: 10px;
   
 }
    input{
        height:36px ;
        background-color: ${(props)=>theme.colors[props.$variant]};
        border: 0;
        border-radius: 4px;
        padding: 12px;
        color: ${theme.colors.neutral};
        font-size: 16px;
        width: 100%;
        border:1px solid transparent;
        transition: all 100ms;

        &::placeholder{
            color: ${theme.colors.white};
        }


        &:focus{
            border-color: ${theme.colors.primary};
        }
    
    
    }

`;
