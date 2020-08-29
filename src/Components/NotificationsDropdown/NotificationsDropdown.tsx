import React from 'react';
import styled from 'styled-components';

interface Notification {
    message: string;
};

interface NotifcationsDropdownProps {
    notifications: Notification[];
};

const NotificationsWrapper = styled.div`
    position: absolute;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    height: 200px;
    overflow: auto;
    width: 80%;
    left: 17px;
    top: 40px;
`;

const Notification = styled.div`
    display: flex;
    position: relative; 
    padding: 10px 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const NotifcationsDropdown = ({ notifications }: NotifcationsDropdownProps) => {
    return (
        <NotificationsWrapper>
            {notifications.map((notification) => 
                <Notification><span>{notification}</span></Notification>
            )}
        </NotificationsWrapper>
    )
};

export default NotifcationsDropdown;