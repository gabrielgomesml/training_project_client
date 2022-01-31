import styled from 'styled-components';
import theme from '../../assets/styles/theme';

export const MainContainer = styled.section`
  background-color: ${theme.colors.mainGray};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LogoImage = styled.img`
  width: 200px;
`;
