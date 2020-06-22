import styled from "styled-components";
import { Col, Row } from 'react-bootstrap';

export const NavRow = styled(Row)`
  padding-top: 20px;
  box-shadow: 0 1px 1px -2px rgba(0,0,0,.2);
  justify-content: space-between;

`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
  font-weight: bold;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -0.5rem;
`
export const LinkText = styled.span`
  font-size: 16px;
  font-weight: 300;
  margin-left: 20px;
`;

export const Logo = styled.div`
    height: 29px;
    width: 29px;
    border: 3px black solid;
    margin-bottom: 0.5rem;
`;

export const LinkCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`