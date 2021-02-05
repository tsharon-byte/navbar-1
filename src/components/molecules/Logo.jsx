import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: ${({ theme }) => theme.primary};
  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    cursor: pointer;
  }
`;

export const Logo = ({ children, ...props }) => (
  <StyledLogo {...props}>{children}</StyledLogo>
);
