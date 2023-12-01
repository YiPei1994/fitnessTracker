import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
function MainNav() {
  return (
    <Nav>
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/schedules">Schedules</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/community">Community</NavLink>
    </Nav>
  );
}

export default MainNav;
