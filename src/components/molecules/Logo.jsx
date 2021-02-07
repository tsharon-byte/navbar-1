import React from "react";
import styled from "styled-components";
import { HOME } from "../../config";
import { NavLink } from "react-router-dom";

const StyledLogo = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  @media (max-width: 360px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  
  color: ${({ theme }) => theme.primary} ;
  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    cursor: pointer;
  }
`;

export const Logo = ({ children, ...props }) => (
  <StyledLogo {...props}><StyledLink to={HOME}>{children}</StyledLink></StyledLogo>
);
