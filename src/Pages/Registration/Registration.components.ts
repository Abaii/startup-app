import styled from 'styled-components';
import { tokens } from '../../assets/tokens';

export const Title = styled.h1`
    font-weight: bold;
    font-size: 48px;
    padding: 20px 0;
    margin-left: 80px;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;

export const FooterText = styled.p`
    font-weight: 200;
    letter-spacing: 1.6;
    line-height: 1.6;
    font-size: 1.6rem;
`;

export const FooterSpan = styled.span`
    color: ${tokens.color.tertiaryColor};
    font-weight: bold;
    text-decoration: underline;
`;
