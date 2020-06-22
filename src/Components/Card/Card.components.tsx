import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.25);
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
`;

export const Subtitle = styled.h3`
    font-size: 18px;
    opacity: 0.8;
`;

export const Icon = styled.div`
    width: 30px;
    height: 30px;
    border: 2px solid black;
    border-radius: 50%;
`;

export const Footer = styled.div`
    display: flex;
    padding: 10px;
`;

export const FooterText = styled.div`

`;

export const Divider = styled.hr`
    border-top: 10px solid grey;
`