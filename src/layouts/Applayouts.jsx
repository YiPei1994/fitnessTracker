import styled from "@emotion/styled";
import React from "react";
import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  width: 100%;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function Applayouts() {
  return (
    <StyledAppLayout>
      <HeaderBar />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default Applayouts;
