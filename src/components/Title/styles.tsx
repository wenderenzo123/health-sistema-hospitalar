import styled from 'styled-components';
import { TitleH1 } from '../../types/types'; 

export const SH = styled.h1<TitleH1>`
    font-size: ${(TitleH1) => TitleH1.fontSize || 30}px;
    font-weight: 700;
    color: ${(TitleH1) => TitleH1.color || 'black'};
    font-family: ${(TitleH1) => TitleH1.font || 'Poppins, sans-serif'};
    margin: ${(TitleH1) => TitleH1.margin || 0.5}rem;
    padding: ${(TitleH1) => TitleH1.padding || 0}rem;
`;