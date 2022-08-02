import React from 'react';
import { FooterLogo, FooterStyles } from './FooterStyles';

function Footer() {
  return (
    <FooterStyles>
      <FooterLogo src="/images/logo-footer.svg" alt="logo footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterStyles>
  );
}

export default Footer;
