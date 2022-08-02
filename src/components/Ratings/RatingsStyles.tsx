import styled from 'styled-components';
import colors from '../../utils/colors';

export const Rating = styled.div`
  color: ${colors.primary};
  font-size: 20px;
  display: flex;
  gap: 5px;
  justify-content: end;
  @media (max-width: 500px) {
    gap: 0;
  }

`;
export const RatingStar = styled.span`
  width: 30px;
  @media (max-width: 500px) {
    width: 15px;
  }
`;
