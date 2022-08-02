import styled from 'styled-components';
import colors from '../../utils/colors';

export const HostStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 24px;
  @media (max-width: 500px) {
    padding-bottom: 0;
  }
`;

export const HostName = styled.h3`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
  max-width: 90px;
  text-align: end;
  line-height: 25.67px;
  @media (max-width: 500px) {
    font-size: 12px;
    max-width: 55px;
    line-height: 12px;
  }
`;

export const HostImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: contain;
  @media (max-width: 500px) {
    width: 32px;
    height: 32px;
  }
`;
