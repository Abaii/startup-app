import styled from "styled-components";

export const NavRow = styled.div`
  display: flex;
  box-shadow: 0 5px 5px -5px rgba(0,0,0,.2);
  justify-content: space-between;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const LinkText = styled.span`
  font-size: 16px;
  font-weight: 300;
  margin-left: 20px;
`;

export const Logo = styled.div`
    height: 29px;
    width: 29px;
    border: 3px black solid;
`;

export const LinkCol = styled.div`
    display: flex; 
    align-items: center;
`;
