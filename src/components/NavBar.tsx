import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components/macro";
import oc from "../oc.json";

const Nav = styled.nav`
  border-bottom: 1px solid ${oc.gray[3]};
  padding: 0 1.8rem;

  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  margin: 0;

  color: ${oc.gray[8]};
  position: absolute;

  @media screen and (max-width: 570px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;

  margin: 0 auto;

  display: flex;
`;

const MenuItem = styled.li`
  font-size: 1.4rem;
  padding: 1rem 1.8rem;

  a {
    color: ${oc.gray[7]};
  }

  &.select {
    a {
      color: ${oc.theme};
      font-weight: bold;
    }

    border-bottom: 3px solid ${oc.theme};
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

export default function NavBar() {
  const location = useLocation();

  function className(path: String) {
    return location.pathname === path ? "select" : "";
  }

  return (
    <Nav>
      <Title>집중해줌 🔍</Title>
      <MenuList>
        <MenuItem className={className("/")}>
          <MenuLink to="/">학생 인증</MenuLink>
        </MenuItem>
      </MenuList>
    </Nav>
  );
}
