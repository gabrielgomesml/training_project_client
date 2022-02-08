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
  align-items: center;
`;

export const Title = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 50px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 50px;
`;

export const UploadImage = styled.img`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 120px;
  margin-bottom: 5px;
  cursor: pointer;
`;
