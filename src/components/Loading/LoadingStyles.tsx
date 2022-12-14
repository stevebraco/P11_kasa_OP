import styled, { keyframes } from 'styled-components';
import colors from '../../utils/colors';

const LoadingAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingCircle = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
  content: " ";
  display: block;
  width: 200px;
  height: 200px;
  margin: 8px;
  border-radius: 50%;
  border: 10px solid ${colors.primary};
  border-color: ${colors.primary} transparent ${colors.primary} transparent;
  animation: ${LoadingAnimation} 1.2s linear infinite;
  }
`;
