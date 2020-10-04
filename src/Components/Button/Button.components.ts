import styled, { css } from 'styled-components';

const sharedStyles = css`
  display: inline-flex;
  align-items: center;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 40px;
  padding: 0 30px;
  text-transform: uppercase;
  text-decoration: none;
  background: #041814;
  transition: all 0.3s ease-in;
  will-change: transform;
  margin-right: 10px;
  font-size: 12px;
  justify-content: center;
  font-weight: bold;
  border: 2px solid black;
  color: white;

  &:hover {
    background: darken(#041814, 20%);
    box-shadow: 0 1px 2px #18a097;
    transform: translate3d(0, -2px, 0);
  }
  &:active {
    box-shadow: 0 1px 1px 0 #18a097;
    transform: translate3d(0, 1px, 0);
  }

  a {
    color: inherit;
  }
`;

export const CallToAction = styled.button`
  ${sharedStyles}
  margin-bottom: 10px;
`;

export const SecondaryButton = styled.button`
  ${sharedStyles};
  color: black;
  border: none;
  background: none;
`;
