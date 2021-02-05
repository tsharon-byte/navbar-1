import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 3px;
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.textPrimary};
    cursor: pointer;
  }
  padding: 5px 10px;
`;

export const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
