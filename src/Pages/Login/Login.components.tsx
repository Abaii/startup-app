import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';


export const LoginContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
`
export const LoginRow = styled(Row)`
        display: flex;
        justify-content: center; 
`


export const LoginTitle = styled.h1`
    font-size: 32px; 
    align-self: center;
`
export const LoginWrapper = styled.div`
    display: flex; 
    flex-direction:column;
    align-self: center; 
    margin: 0 auto;
    background-color: #fff;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);

    padding: 20px;
`

export const RegisterText = styled.h6`
align-self: center;
    opacity: 0.8;
    padding-top: 10px;
    margin: 10px;
`
export const RegisterLink = styled.span`
    font-weight:bold;
    text-decoration: underline;

`
export const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    min-height: 100vh;
`