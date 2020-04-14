import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  box-shadow: 0 10px 10px -10px rgba(0,0,0,.2);
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0 auto;
  font-size: 32px;
`;

export const LinkText = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

export const Logo = styled.div`
    height: 29px;
    width: 29px;
    border: 3px black solid;
`;

export const NavButtonWrapper = styled.div`
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
`;
