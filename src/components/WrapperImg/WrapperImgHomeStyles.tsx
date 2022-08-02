import styled from 'styled-components';

export const WrapperImg = styled.div`
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 43px;
  display: inline-flex;
  border-radius: 25px;
  height: 223px;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    display: block;
    inset: 0;
  }

  @media (max-width: 500px) {
    height: 111px;
    border-radius: 10px;
    margin-bottom: 0;
  }
`;
export const WrapperTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f6f6f6;
  z-index: 2;

  @media (max-width: 500px) {
    width: 220px;
    left: 16px;
    transform: translate(0%, -50%);
  }

  h1 {
    font-size: 38px;
    @media (max-width: 500px) {
      font-size: 24px;
      max-width: 200px;
    }
  }
`;
export const WrapperImage = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 500px) {
    object-fit: cover;
  }
`;
