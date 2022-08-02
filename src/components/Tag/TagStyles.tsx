import styled from 'styled-components';
import colors from '../../utils/colors';

const TagStyles = styled.div`
  background: ${colors.primary};
  color: ${colors.secondary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  height: 25px;
  font-size: 14px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
  `;
export default TagStyles;
