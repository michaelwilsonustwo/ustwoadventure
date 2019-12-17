import React from "react";
import { styled } from "linaria/react";

import OrbitLogo from "./orbit-logo";
import Nav from "./nav";

const StyledHeader = styled.header`
    margin: 0;
    grid-column: 1 / -1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Header = () => (
    <StyledHeader>
        <OrbitLogo />
        <Nav />
    </StyledHeader>
);

export default Header;
