import styled from 'styled-components';
import colors from '../../utils/colors';

export const CardStyles = styled.div`
  height: 340px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: '';
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    z-index: 2;
    inset: 0;
  }
  @media (max-width: 500px) {
    width: initial;
    height: 255px;
  }
`;
export const CardFigure = styled.figure`
  height: 100%;
`;

export const CardFigcaption = styled.figcaption`
  position: absolute;
  z-index: 100;
  bottom: 0;
  color: ${colors.secondary};
  left: 20px;
  right: 20px;
  bottom: 20px;
`;

export const CardImg = styled.img`
  object-fit: cover;
  height: 100%;
`;
