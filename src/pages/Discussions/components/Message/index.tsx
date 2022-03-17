import React, { useEffect, useRef } from 'react';
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
  const { ws, messages, username, roomId, clientId } = useSocket();
  const newMessageRef = useRef<any>(null);

  const handleSendMessage = () => {
    const message = newMessageRef.current.value;

    if (!String(message).trim()) {
      return;
    }

    ws.send(
      JSON.stringify({
        eventType: 'clientEvent',
        event: `${EVENTS.CLIENT.SEND_ROOM_MESSAGE}/${clientId}`,
        payload: {
          message,
          username,
          roomId,
        },
      }),
    );

    newMessageRef.current.value = '';
  };

  return (
    <MainContainer>
      <Messages>
        {messages?.map(({ message, time, username }) => (
          <MessageContainer>
            <p>{message}</p>
            <p
              style={{
                position: 'absolute',
                right: '3px',
                bottom: '3px',
                fontSize: '10px',
                color: theme.colors.mainRed,
              }}
            >
              {time}
            </p>
            <p
              style={{
                position: 'absolute',
                right: '3px',
                top: '3px',
                fontSize: '10px',
                color: theme.colors.mainRed,
              }}
            >
              {username}
            </p>
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
