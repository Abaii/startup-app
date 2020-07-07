import styled from 'styled-components';

export const InputWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  padding: 5px;
  
  input {
    border-width: 0;
    font-size: 1.2em;
    margin: 2px;
    z-index: 1;
    width: 100%;
    padding: 5px 10px;
    border-radius: 4px;
  }

  input:focus {
    outline: 0;
  }
 
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background-color: inherit;

`;
