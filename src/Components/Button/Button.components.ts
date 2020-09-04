import styled, { css } from 'styled-components';
import { tokens } from '../../assets/tokens';

const sharedStyles = css`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  padding: 0.5em 2em;
  transition: all 0.2s ease-in-out;
  color: ${tokens.color.secondaryColor};
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(-2px);
    
  };
  a {
    color: inherit;
  }
`;

export const CallToAction = styled.button`
  ${sharedStyles}
  border: 1px solid ${tokens.color.primaryColor};
  color: ${tokens.color.primaryColor};
  background-color: ${tokens.color.tertiaryColor};
`;

export const SecondaryButton = styled.button`
  ${sharedStyles};
  background: none;
  border: none;
`;
