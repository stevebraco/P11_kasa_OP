import React from 'react';
import { LinkNav, Nav } from './NavigationStyles';

function Navigation() {
  return (
    <Nav>
      <LinkNav
        to="/"
      >
        Accueil
      </LinkNav>
      <LinkNav
        to="/about"
      >
        A Propos
      </LinkNav>
    </Nav>
  );
}

export default Navigation;
