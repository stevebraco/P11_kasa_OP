import React from 'react';
import styled from 'styled-components';
import ButtonToggleList from '../components/Button/ButtonToggleList';
import WrapperImgHome from '../components/WrapperImg/WrapperImgHome';
import textAbout from '../utils/textAbout';

const Container = styled.section`
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 15px 25px;
  `;

function Apropos() {
  return (
    <Container>
      <WrapperImgHome img="./images/paysage-title2.png" title={null} />
      <ButtonToggleList buttonName="Fiabilité" items={textAbout.Fiabilité} isLarge />
      <ButtonToggleList buttonName="Respect" items={textAbout.Respect} isLarge />
      <ButtonToggleList buttonName="Service" items={textAbout.Service} isLarge />
      <ButtonToggleList buttonName="Sécurité" items={textAbout.Sécurité} isLarge />
    </Container>
  );
}

export default Apropos;
