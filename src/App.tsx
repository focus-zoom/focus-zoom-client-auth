import React from "react";
import styled from "styled-components/macro";

import Root from "./routes";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <Container className="App">
      <Root />
    </Container>
  );
}
