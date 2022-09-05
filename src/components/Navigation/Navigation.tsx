import React from 'react';
import { LinkNav, Nav } from './NavigationStyles';

function Navigation() {
  return (
    <Nav>
      <LinkNav
        isactive="true"
        to="/"
      >
        Accueil
      </LinkNav>
      <LinkNav
        isactive="true"
        to="/about"
      >
        A Propos
      </LinkNav>
    </Nav>
  );
}

export default Navigation;
