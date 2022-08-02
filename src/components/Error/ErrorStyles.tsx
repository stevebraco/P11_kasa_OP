import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/colors';

export const ErrorStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
`;
export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ErrorNumber = styled.p`
  font-size: 288px;
  font-weight: 700;
  color: ${colors.primary};
`;
export const ErrorText = styled.p`
  font-weight: 500;
  font-size: 36px;
  color: ${colors.primary};
`;

export const ErrorLink = styled(Link)`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
`;
