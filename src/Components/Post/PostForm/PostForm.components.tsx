import styled from 'styled-components';
import { headingStyles, descriptionStyles } from '../SharedStyles';

export const HeadingContainer = styled.div`
    display: flex;
    margin-top: 100px;

`;

export const DescriptionContainer = styled.div`
    display: flex;
    margin-top: 50px;
`;

export const DescriptionText = styled.span`
    ${descriptionStyles};
`;

export const DescriptionInput = styled.textarea`
    ${descriptionStyles};
    border: 1px solid #e1e1e1;
    padding: 5px;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.2);
    min-width: 100%;
`

export const HeadingText = styled.h2`
    ${headingStyles};
`;

export const HeaderInput = styled.input`
    ${headingStyles};
    border: none; 
    border-bottom: 1px solid black;
    min-width: 200px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 50px;
`