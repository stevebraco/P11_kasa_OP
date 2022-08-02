import styled from 'styled-components';
import colors from '../../utils/colors';

export const FooterStyles = styled.footer`
  padding: 65px 0 29px;
  gap: 30px;
  background: #000000;
  color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLogo = styled.img`
  width: 122px;
`;
