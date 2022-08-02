import styled from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 15px 63px;
  max-width: 1270px;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding: 20px 20px 16px;
  }
`;

export const HeaderLogo = styled.img`
  width: initial;
  @media (max-width: 500px) {
    width: 145px;
  }
`;
