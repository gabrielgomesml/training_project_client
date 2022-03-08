import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryGray};
  width: 100%;
  height: 50vh;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  position: relative;
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

export const TextAreaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
`;

export const MessageTextArea = styled.textarea`
  width: 70%;
  height: 40px;
  outline: none;
  border-radius: 5px;
`;

export const MessageContainer = styled.div`
  padding: 10px 10px 10px 10px;
  background-color: rgba(256, 256, 256, 0.4);
  margin: 5px 10px 5px 10px;
  width: auto;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  position: relative;
`;
