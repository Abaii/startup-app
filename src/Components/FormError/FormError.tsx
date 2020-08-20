import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    color: #ff0033;
    font-size: 12px;
`;


const FormError = (props: any) => (
    <ErrorWrapper>
        {props.children}
    </ErrorWrapper>
);

export default FormError;