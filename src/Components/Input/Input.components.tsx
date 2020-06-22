import styled from "styled-components";

export const InputWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  padding: 5px;
  box-shadow: inset rgba(108, 108, 155, 0.5);
  &:focus {
    background-color: black;
  }
 

  input {
    border-radius: 10px 10px;
    background-color: rgb(232, 240, 254);
    border-width: 0;
    font-size: 1.5em;
    margin: 2px;
    z-index: 1;
    width: 100%;
  }

  input:focus {
    outline: 0;
  }
 
`;
