import styled from "@emotion/styled";
import React from "react";
import MainNav from "../components/MainNav";

const StyledSideBar = styled.div`
  padding: 3.2rem 2.4rem;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function SideBar() {
  return (
    <StyledSideBar>
      <MainNav />
    </StyledSideBar>
  );
}

export default SideBar;
