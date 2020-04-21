import styled from "styled-components";


interface CTAProps {
  color?: string;
  width?: string;
}

export const CallToAction = styled.button<CTAProps>`
  ${({ width }) => width && `width: ${width}`}
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color ? `${props.color}` : '#fff'};
  cursor: pointer;
  background-image: linear-gradient(-180deg, 	#6969f6 0%, #9191ed 100%);
  border-radius: 5px;
  line-height: 1.5;
  padding: .5em 2em;
  border: 1px solid #6969f6;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.20);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: translateY(-2px);
    
  }
`;
