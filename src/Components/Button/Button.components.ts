import styled, { css } from 'styled-components';

const sharedStyles = css`
  display: inline-flex;
  align-items: center;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 40px;
  padding: 0 30px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  will-change: transform;
  margin-right: 10px;
  font-size: 12px;
  justify-content: center;
  background: #18a097;
  font-weight: bold;
  border: 2px solid black;
  background: none;

  &:hover {
    background: darken(#18a097, 20%);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
  }
  &:active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 1px, 0);
  }

  a {
    color: inherit;
  }
`;

export const CallToAction = styled.button`
  ${sharedStyles}
  color: black;
  margin-bottom: 10px;
`;

export const SecondaryButton = styled.button`
  ${sharedStyles};
  color: black;
  border: none;
  background: none;
`;
