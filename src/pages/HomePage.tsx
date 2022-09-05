import React from 'react';
import styled from 'styled-components';
import WrapperImgHome from '../components/WrapperImg/WrapperImgHome';
import Cards from '../components/Cards/Cards';
import Loading from '../components/Loading/Loading';
import Appartement from '../types/Appartement';

type DataProps = {
  appartements: Appartement[],
  loading: boolean
}

const Container = styled.section`
  padding: 0 15px;
  max-width: 1270px;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

function HomePage({ appartements, loading }: DataProps) {
  if (loading) return <Loading />;
  return (
    <Container>
      <WrapperImgHome img="./images/paysage-title.png" title="Chez vous, partout et ailleurs" />
      <Cards appartements={appartements} />
    </Container>
  );
}

export default HomePage;
