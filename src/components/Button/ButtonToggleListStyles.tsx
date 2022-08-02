import styled from 'styled-components';
import colors from '../../utils/colors';

type ButtonStyleProps = {
  isLarge?: boolean;
}

type IconStyleProps = {
  isOpen?: boolean,
}

export const BtnList = styled.div<ButtonStyleProps>`
  ${(props) => (props.isLarge ? (
    `width: 82.5%;
    margin: 0 auto 15px auto
    `
  ) : (
    `width: 50%;
    margin-bottom: 10px;
    `
  ))};
  
  color: ${colors.primary};
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Icon = styled.img<IconStyleProps>`
  width: 25px;
  transform: rotate(180deg);
  ${(props) => props.isOpen && `
    transform: rotate(0deg);
  `}

@media (max-width: 500px) {
  width: 15px;

}
`;

export const ButtonLarge = styled.button`
  background: ${colors.primary};
  color: ${colors.secondary};
  width: 100%;
  text-align: left;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
  font-size: 18px;
  transform: translateY(10px);
  @media (max-width: 500px) {
    font-size: 10px;
  }

`;
