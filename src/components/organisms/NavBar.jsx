import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import { Button, Logo } from "../molecules";
import { ABOUT, CONTACT_US, HOME } from "../../config";

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
  background: silver;
  align-items: baseline;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

const NavBarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30vw;
  @media (max-width: 768px) {
    width: 50vw;
  }
`;

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

export const NavBar = () => (
  <StyledNavbar>
    <Logo>
        LOGO
      </Logo>
    <NavBarItems>
      <StyledLink to={HOME} activeStyle exact>
        Home
      </StyledLink>
      <StyledLink to={ABOUT} activeStyle>
        About
      </StyledLink>
      <StyledLink to={CONTACT_US} activeStyle>
        Contact us
      </StyledLink>
    </NavBarItems>
    <Button>SIGN IN</Button>
  </StyledNavbar>
);
