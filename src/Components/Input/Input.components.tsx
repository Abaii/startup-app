import styled from "styled-components";

export const InputWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  margin: 20px 10px;
  padding: 5px;
  box-shadow: inset rgba(108, 108, 155, 0.5);
  &:focus {
    background-color: black;
  }
  label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    width: 100%;
    transition: 0.2s;
    color: grey;
    text-transform: capitalize;
    font-size: 1.5rem;
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

  input:focus + label,
  input:valid + label {
    bottom: 100%;
    left: 10px;
    margin-top: -17px;
    font-size: 1rem;
  }

  input:valid {
    background: white;
  }
`;
