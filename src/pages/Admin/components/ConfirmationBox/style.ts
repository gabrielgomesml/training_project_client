import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 560px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  display: flex;
  flex-direction: column;
  padding: 20px 20px 40px 20px;
  gap: 20px;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 30px;
`;

export const Button = styled.button`
  padding: 10px 10px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
