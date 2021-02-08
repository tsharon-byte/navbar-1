import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ABOUT, CONTACT_US, HOME } from "../../config";

const StyledMobileNavbar = styled.div`
  position: absolute;
  top: 70px;
  left: 0px;
  width: 100%;
  visibility: ${({ collapsed }) => (collapsed === true ? "hidden" : "visible")};
  transition: opacity 1s ease-out;
  opacity: ${({ collapsed }) => (collapsed ? 0 : 1)};
  background-color: ${({ theme }) => theme.backgroundMobile};
`;

const StyledItem = styled.div`
  padding: 10px;
  font-size: 20px;
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.textPrimary};
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
export const MobileNavbar = ({ collapsed, onClick }) => (
  <StyledMobileNavbar collapsed={collapsed}>
    <StyledItem onClick={onClick}>
      <StyledLink to={HOME} activeStyle exact>
        HOME
      </StyledLink>
    </StyledItem>
    <StyledItem onClick={onClick}>
      <StyledLink to={ABOUT} activeStyle exact>
        About
      </StyledLink>
    </StyledItem>
    <StyledItem onClick={onClick}>
      <StyledLink to={CONTACT_US} activeStyle exact>
        Contact us
      </StyledLink>
    </StyledItem>
  </StyledMobileNavbar>
);
