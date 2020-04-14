import React from "react";
import {
    NavbarWrapper,
    Title,
    NavButtonWrapper,
    LinkText,
    Logo,
} from "./Navbar.components";

export const NavBar = () => {
    return (
        <NavbarWrapper>
            <Logo />
            <Title>Startup</Title>
            <NavButtonWrapper>
                <LinkText>Home</LinkText>
                <LinkText>Join</LinkText>
            </NavButtonWrapper>
        </NavbarWrapper>
    );
};
