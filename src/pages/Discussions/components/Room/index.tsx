import React, { useRef } from 'react';
import { useSocket } from '../../../../hooks/socket';
import EVENTS from '../../config/events';
import { Button } from '../../../../components';
import theme from '../../../../assets/styles/theme';
import {
  MainContainer,
  CreateRoomContainer,
  RoomInput,
  RoomsContainer,
  RoomButton,
} from './style';

export const Room: React.FC = () => {
  const { socket, roomId, rooms } = useSocket();
  const newRoomRef = useRef<any>(null);

  const handleCreateRoom = () => {
    const { value } = newRoomRef.current;

    const roomName = value || '';

    if (!String(roomName).trim()) {
      return;
    }
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

    newRoomRef.current.value = '';
  };

  const handleJoinRoom = (key: string) => {
    if (key === roomId) {
      return;
    }
    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
  };

  return (
    <MainContainer>
      <CreateRoomContainer>
        <RoomInput ref={newRoomRef} placeholder="Nome da sala" />
        <Button
          backgroundColor={theme.colors.mainRed}
          width={225}
          height={30}
          handleButton={handleCreateRoom}
          text="Criar sala"
        />
      </CreateRoomContainer>
      <div
        style={{
          width: '1px',
          height: '74px',
          margin: '0px 10px 0px 10px',
          backgroundColor: theme.colors.mainBlack,
        }}
      />
      <RoomsContainer>
        {Object.keys(rooms).map((key) => (
          <div key={key}>
            <RoomButton
              type="button"
              disabled={key === roomId}
              title={`Entre na sala ${rooms[key].name}`}
              onClick={() => handleJoinRoom(key)}
            >
              {rooms[key].name}
            </RoomButton>
          </div>
        ))}
      </RoomsContainer>
    </MainContainer>
  );
};
