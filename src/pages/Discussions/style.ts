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

export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width 100%;
  background-color: rgba(256, 256, 256, 0.3);
  align-items: center;
  padding: 30px 0px 30px 0px;
  gap: 10px;
`;

export const UsernameInput = styled.input`
  height: 34px;
  padding: 1.5px 8px;
  outline: none;
  border: none;
  font-size: 16px;
`;
