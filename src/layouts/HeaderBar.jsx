import styled from "@emotion/styled";
import React from "react";

const Header = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function HeaderBar() {
  return <Header>HeaderBar</Header>;
}

export default HeaderBar;
