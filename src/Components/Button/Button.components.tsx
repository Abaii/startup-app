import styled from "styled-components";
import { css } from "styled-components";

const Button = css`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1.5rem;
  line-height: 1.8;
  border-radius: 1.85rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Block = css`
  display: block;
  width: 100%;
`;

const primaryColour = css`
  color: #212529;
  background-color: #6969f6;
  border-color: #6969f6;
  &:hover {
    color: #fff;
    background-color: #6565eb;
    border-color: #6565eb;
    -webkit-box-shadow: 0px 0px 2px 0px rgba(100, 100, 200, 0.75);
    -moz-box-shadow: 0px 0px 2px 0px rgba(100, 100, 200, 0.75);
    box-shadow: 0px 0px 2px 0px rgba(100, 100, 200, 0.75);
  }
`;

export const CallToAction = styled.button`
  ${Button}
  ${Block}
  ${primaryColour}
`;
