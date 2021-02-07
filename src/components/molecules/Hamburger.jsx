import React from "react";
import styled from "styled-components";

const StyledBurger=styled.div`
cursor: pointer;
width: 20px;
height: 30px;

@media (min-width: 361px) {
    display: none;
  }
`;

const Line=styled.div`
width: 20px;
height: 2px;
background-color: ${({theme })=> theme.primary};
margin: 5px 0;
transition: all 0.3s ease-out;
transform-origin: 0 1px;

:first-child {
  transform: ${({ collapsed }) => (!collapsed ? 'rotate(45deg); width: 20px;' : 'rotate(0)')};
}

:nth-child(2) {
  opacity: ${({ collapsed }) => (!collapsed ? '0' : '1')};
  transform: ${({ collapsed }) => (!collapsed ? 'translateX(20px)' : 'translateX(0)')};
}

:nth-child(3) {
  transform-origin: 0 1px;
  transform: ${({ collapsed }) => (!collapsed ? 'rotate(-45deg); width: 20px;' : 'rotate(0)')};
}
`;

export const Hamburger = ({collapsed, onClick}) => (
    <StyledBurger onClick={onClick}>
        <Line collapsed={collapsed}/>
        <Line collapsed={collapsed}/>
        <Line collapsed={collapsed}/>
    </StyledBurger>
);
