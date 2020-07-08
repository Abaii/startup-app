import styled from 'styled-components';

export const InputWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  background-color: #fff;
  border-radius: 10px;

  input {
    border-width: 0;
    font-size: 1.6rem;
    margin: 2px;
    z-index: 1;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }

  input:focus {
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(58, 151, 212, 0.36) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px  
  }
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background-color: inherit;
`;
