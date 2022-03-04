import React, { useRef } from 'react';
import { useSocket } from '../../../../hooks/socket';
import EVENTS from '../../config/events';
import {
  MainContainer,
  MessageContainer,
  Messages,
  MessageTextArea,
  TextAreaContainer,
} from './style';
import { Button } from '../../../../components';
import theme from '../../../../assets/styles/theme';

export const Message: React.FC = () => {
  const { socket, roomId, messages, username, setMessages } = useSocket();
  const newMessageRef = useRef<any>(null);

  const handleSendMessage = () => {
    const message = newMessageRef.current.value;

    if (!String(message).trim()) {
      return;
    }

    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { roomId, message, username });

    const date = new Date();
    if (messages) {
      setMessages([
        ...messages,
        {
          username: 'Você',
          message,
          time: `${date.getHours()}:${date.getMinutes()}`,
        },
      ]);
    }

    newMessageRef.current.value = '';
  };

  if (!roomId) {
    return (
      <div style={{ marginTop: '30px' }}>
        <p>Entre em uma sala para abrir o chat</p>
      </div>
    );
  }
  return (
    <MainContainer>
      <Messages>
        {messages?.map(({ message }) => (
          <MessageContainer>
            <p>{message}</p>
          </MessageContainer>
        ))}
      </Messages>
      <TextAreaContainer>
        <MessageTextArea
          rows={1}
          placeholder="Fale algo..."
          ref={newMessageRef}
        />
        <Button
          handleButton={handleSendMessage}
          text="Enviar"
          width={200}
          height={40}
          backgroundColor={theme.colors.mainRed}
        />
      </TextAreaContainer>
    </MainContainer>
  );
};
