import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.25); */
`;

export const FormRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 5px auto;
  label {
    font-weight: bold;
    font-size: 14px;
  }
`;

export const FormTitleWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 20px auto;
`;
export const FormTitle = styled.h1`
  font-size: 32px;
  margin-top: 20px;
  font-weight: bold;
`;

export const Footer = styled.div`
  margin: 15px auto;
  width: 80.5%;
  button {
    width: 100%;
  }
`;

