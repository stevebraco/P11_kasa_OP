import styled from 'styled-components';

const CardsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
  grid-gap: 60px;
  background: #f6f6f6;
  padding: 56px 50px;
  border-radius: 25px;
  @media (max-width: 500px) {
    padding: 22px 0;
    gap: 20px;
    background: transparent;
  }
`;

export default CardsStyles;
