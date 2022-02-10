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
  max-width: 314px;
`;

export const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 50px;
`;

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border: none;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

export const UploadImage = styled.img`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.mainBlack};
`;

export const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
