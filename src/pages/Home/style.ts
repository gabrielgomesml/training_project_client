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

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

export const AddMovie = styled.div`
  width: 100px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.mainBlack};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
