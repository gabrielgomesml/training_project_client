/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { EventEmitter } from 'events';
import EVENTS from '../pages/Discussions/config/events';

type Message = {
  message: string;
  time: string;
  username: string;
};

interface SocketContextProps {
  // socket: Socket;
  ws: WebSocket;
  username?: string;
  setUsername: Function;
  messages?: Message[];
  setMessages: Function;
  roomId?: string;
  setRoomId: Function;
  clientId?: string;
  rooms: any;
}

interface EventMsg {
  eventType: string;
  event: string;
  payload: any;
}

const ws = new WebSocket('ws://localhost:3001/');

const serverEmitter = new EventEmitter();
const clientEmitter = new EventEmitter();

const SocketContext = createContext<SocketContextProps>({
  ws,
  clientId: '',
  setUsername: () => false,
  setMessages: () => false,
  setRoomId: () => '',
  rooms: {},
  messages: [],
});

export const SocketsProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [rooms, setRooms] = useState({});
  const [clientId, setClientId] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  ws.onopen = () => {
    console.log('Websocket connected');
  };

  ws.onmessage = (message) => {
    const msg: EventMsg = JSON.parse(message.data);

    if (msg.eventType === 'connectionEvent') {
      const { userId } = msg.payload;
      setClientId(userId);
    } else if (msg.eventType === 'serverEvent') {
      serverEmitter.emit(msg.event, msg.payload);
    } else if (msg.eventType === 'clientEvent') {
      clientEmitter.emit(msg.event, msg.payload);
    }
  };

  ws.onclose = () => {
    console.log('Connection closed');
  };

  serverEmitter.addListener(EVENTS.SERVER.ROOMS, (payload) => {
    const { roomsData } = payload;
    setRooms(roomsData);
  });

  serverEmitter.addListener(
    `${EVENTS.SERVER.JOINED_ROOM}/${clientId}`,
    (payload) => {
      const { roomKey } = payload;
      setRoomId(roomKey);
      setMessages([]);
    },
  );

  useEffect(() => {
    serverEmitter.addListener(
      `${EVENTS.SERVER.ROOM_MESSAGE}/${roomId}`,
      (payload) => {
        const { message, username, time } = payload;
        setMessages((messages) => [...messages, { message, username, time }]);
      },
    );
  }, [roomId]);

  const value = useMemo(
    () => ({
      // socket,
      ws,
      clientId,
      username,
      setUsername,
      roomId,
      setRoomId,
      rooms,
      messages,
      setMessages,
    }),
    [clientId, messages, roomId, rooms, username],
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
