import styled, { css } from "styled-components";


interface CTAProps {
  color?: string;
  clear?: boolean;
}

const primaryButtonStyles = css`
  background: none;
  color: black;
`
const tertiaryButtonStyles = css`
  background: #BBE774;
  border: 1px solid #BBE774;
  color: black;
`;
export const CallToAction = styled.button<CTAProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color ? `${props.color}` : '#fff'};
  cursor: pointer;
  ${({clear}) => clear ? `${primaryButtonStyles}` : `${tertiaryButtonStyles}` };
  
  line-height: 1.5;
  padding: 0.3em 2em;
  margin-left: 20px;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline:none;
  }
  &:hover{
    transform: translateY(-2px);
    
  }
`;
