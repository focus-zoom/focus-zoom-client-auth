import React from "react";
import styled from "styled-components/macro";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "../components/NavBar";
import LoginPage from "../pages/Login";

const Main = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 3rem;
`;

export default function Root() {
  return (
    <BrowserRouter>
      <NavBar />

      <Main>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Redirect path="*" to="/" />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}
