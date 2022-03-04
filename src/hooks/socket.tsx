/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import io, { Socket } from 'socket.io-client';
import EVENTS from '../pages/Discussions/config/events';

type Message = {
  message: string;
  time: string;
  username: string;
};

interface SocketContextProps {
  socket: Socket;
  username?: string;
  setUsername: Function;
  messages?: Message[];
  setMessages: Function;
  roomId?: string;
  rooms: any;
}

const socket = io('http://localhost:3001/');

const SocketContext = createContext<SocketContextProps>({
  socket,
  setUsername: () => false,
  setMessages: () => false,
  rooms: {},
  messages: [],
});

export const SocketsProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [rooms, setRooms] = useState({});
  const [messages, setMessages] = useState<Message[]>([]);

  socket.on(EVENTS.SERVER.ROOMS, (value) => {
    setRooms(value);
  });

  socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
    setRoomId(value);
    setMessages([]);
  });

  useEffect(() => {
    socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, username, time }) => {
      if (!document.hasFocus()) {
        document.title = 'Nova menssagem...';
      }
      setMessages((messages) => [...messages, { message, username, time }]);
    });
  }, []);

  const value = useMemo(
    () => ({
      socket,
      username,
      setUsername,
      roomId,
      rooms,
      messages,
      setMessages,
    }),
    [messages, roomId, rooms, username],
  );
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used within a SocketsProvider');
  }
  return context;
};
