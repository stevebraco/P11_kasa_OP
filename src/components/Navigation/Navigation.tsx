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
        to="/apropos"
      >
        A Propos
      </LinkNav>
    </Nav>
  );
}

export default Navigation;
