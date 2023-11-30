import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <Flex direction="column">
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/schedules">Schedules</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/community">Community</NavLink>
    </Flex>
  );
}

export default MainNav;
