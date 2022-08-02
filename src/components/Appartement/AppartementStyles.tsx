import styled from 'styled-components';
import colors from '../../utils/colors';

export const AppartementStyles = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 15px 25px;
  @media (max-width: 500px) {
    padding: 0 20px 25px;  }
`;
export const AppartementContainerImg = styled.div`
  position: relative;
  height: 415px;
  margin-bottom: 30px;
  @media (max-width: 500px) {
  height: 215px;
  }
`;

export const AppartementImg = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;

export const AppartementIconBack = styled.button`
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 5%;
  left: 0;
  @media (max-width: 500px) {
  width: 12%;
  }
`;

export const AppartementIconNext = styled.button`
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 5%;
  right: 0;
  @media (max-width: 500px) {
  width: 12%;
  }
`;

export const AppartementInfo = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
  flex-direction: column;
  }
`;

export const AppartementTitle = styled.h2`
  color: ${colors.primary};
  font-size: 36px;
  font-weight: 500;
  @media (max-width: 500px) {
  font-size: 18px;
  }

`;
export const AppartementSubtitle = styled.h3`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 500px) {
  font-size: 14px;
  }
`;

export const DisplayNumber = styled.span`
 position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%,-50%);
    color: ${colors.secondary};
    @media (max-width: 500px) {
      bottom: 2px;
    }
`;

export const AppartementInfoRight = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const AppartementButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
