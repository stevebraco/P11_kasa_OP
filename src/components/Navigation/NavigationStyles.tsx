import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/colors';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 57px;
  font: 500;
  @media (max-width: 500px) {
    gap: 10px;
  }
`;

export const LinkNav = styled(NavLink)`
  color: ${colors.primary};
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    text-transform: uppercase;
    }
`;
