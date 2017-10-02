import styled from 'styled-components';
import * as CS from '../constants/styles'

export const SCCh1 = styled.h1`
    text-align: center;
    color: blue;
    width: 100%;
    border-bottom: 1px solid #ccc;
    font-size: ${props => props.fontSize ? props.fontSize : CS.FONT_SIZE_H1};
`;

export const SCCp = styled.p`
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
`;