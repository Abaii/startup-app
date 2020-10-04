import styled from 'styled-components';

export const StyledInput = styled.input`

  border-width: 0;
  font-size: 1.6rem;
  margin: 2px;
  z-index: 1;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #041814;

  &:focus {
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(58, 151, 212, 0.36) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px  
  }
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background-color: inherit;
`;
