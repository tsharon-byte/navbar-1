import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Button, Logo, Hamburger } from "../molecules";
import { MobileNavbar } from "../organisms";
import { ABOUT, CONTACT_US, HOME } from "../../config";

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
  background: silver;
  align-items: center;
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
  @media (max-width: 360px) {
    display: none;
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

export const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <StyledNavbar>
      <Logo>LOGO</Logo>
      <Hamburger
        onClick={() => setCollapsed(!collapsed)}
        collapsed={collapsed}
      />
      <MobileNavbar
        collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      />
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
};
