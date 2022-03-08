import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mainGray};
  width: 100%;
  display: flex;
`;

export const CreateRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RoomInput = styled.input`
  height: 34px;
  padding: 1.5px 8px;
  outline: none;
  border: none;
  font-size: 16px;
`;

export const RoomsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  max-height: 74px;
  overflow-y: scroll;
  flex-wrap: wrap;
`;

export const RoomButton = styled.button`
  padding: 3px 5px 3px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
