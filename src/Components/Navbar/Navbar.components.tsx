import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const NavRow = styled(Row)`
  padding-top: 20px;
  box-shadow: 0 1px 1px -2px rgba(0,0,0,.2);
  justify-content: space-between;
  a {
    color: inherit;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
  font-family: "Reislust";
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: -0.5rem;
  cursor: pointer;
`;
export const LinkText = styled.span`
  font-size: 16px;
  font-weight: 300;
  margin-left: 20px;
`;

export const Logo = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
`;

export const Triangle = styled.div`
  position: relative;
  top: -9px;
  left: -3px;
  border-style: solid;
  border-width: 7.5px 0 7.5px 15px;
  border-color: transparent transparent transparent #041814;
  transform: rotate(270deg);

`;

export const Square = styled.div`
  bottom: 0;
  right: 0;
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #041814;

`


export const LinkCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NotiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
`;

export const NewNotiSymbol = styled.div`
    position: absolute;
    left: 20px;
    bottom: 11px;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
`;
