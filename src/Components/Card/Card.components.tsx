import styled from 'styled-components';
import { tokens } from '../../assets/tokens';
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.25);
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
    height: 320px;
    border-radius: 2%;
    margin-bottom: 20px;
    background-color: whitesmoke;
    color: ${tokens.color.secondaryColor};
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1.2px;
    margin: 20px 0;
    line-height: 1.6;
`;

export const Subtitle = styled.h3`
    font-size: 16px;
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 20px;
    
`;

export const Icon = styled.div`
    width: 30px;
    height: 30px;
    border: 2px solid black;
    border-radius: 50%;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
`;

export const FooterText = styled.span`
    font-size: 14px;
    line-height: 1.6;
    font-weight: bold;
`;

export const Divider = styled.div`
    border-top: 2px solid grey;
    height: 1px;
    margin: 10px 0;
`