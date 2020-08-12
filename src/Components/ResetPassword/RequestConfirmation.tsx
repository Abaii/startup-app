import React from 'react';
import styled from 'styled-components';

interface RequestConfirmationProps {
    username?: string;
    email?: string;
};

const ConfirmationContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
`;
const ConfirmationText = styled.span`
    font-weight: 300;
    font-size: 32px;
    line-height: 1.5;
`;

const RequestConfirmation = ({ username, email }: RequestConfirmationProps ) => {
    return (
        <ConfirmationContainer>
            <ConfirmationText>An email has been sent to {
                    email ? `${email}` : `the email associated with the user ${username}` 
                }
                {" "} with details on how to reset your password
            </ConfirmationText>
        </ConfirmationContainer>
    )
};

export default RequestConfirmation;