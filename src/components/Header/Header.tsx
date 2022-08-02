import React from 'react';
import Navigation from '../Navigation/Navigation';
import { HeaderLogo, HeaderStyles } from './HeaderStyles';

function Header() {
  return (
    <HeaderStyles>
      <HeaderLogo src="/images/logo.svg" alt="logo" />
      <Navigation />
    </HeaderStyles>
  );
}

export default Header;
