import styled from 'styled-components';

export const MainContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.mainGray};
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
  width: 760px;
  min-height: 100vh;
  padding: 30px 30px 0px 30px;
`;
