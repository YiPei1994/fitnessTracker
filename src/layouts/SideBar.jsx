import styled from "@emotion/styled";
import React from "react";
import MainNav from "../components/MainNav";

const StyledSideBar = styled.div`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: var(--color-grey-100) 1px solid;
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
