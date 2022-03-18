import React, { useRef, useEffect } from 'react';
import {
  MainContainer,
  ContentContainer,
  UsernameContainer,
  UsernameInput,
} from './style';
import { Button } from '../../components';
import { useSocket } from '../../hooks/socket';
import { Room } from './components/Room';
import { Message } from './components/Message';
import theme from '../../assets/styles/theme';

export const Discussions: React.FC = () => {
  const { username, setUsername } = useSocket();
  const usernameRef = useRef<any>('');

  const handleSetUsername = () => {
    if (usernameRef.current.value) {
      const { value } = usernameRef.current;
      setUsername(value);
      localStorage.setItem('username', value);
    }
  };

  return (
    <MainContainer>
      <ContentContainer>
        {!username && (
          <>
            <h1 style={{ alignSelf: 'flex-start' }}>Discussões</h1>
            <p>
              Discuta sobre assuntos da sua escolha interagindo com outros
              usuários da plataforma. Basta apenas escolher seu apelido, criar
              uma nova sala ou entrar numa já disponível.
            </p>
            <UsernameContainer>
              <UsernameInput placeholder="Apelido" ref={usernameRef} />
              <Button
                backgroundColor={theme.colors.mainRed}
                width={225}
                height={30}
                handleButton={handleSetUsername}
                text="Entrar"
              />
            </UsernameContainer>
          </>
        )}
        {username && (
          <>
            <Room />
            <Message />
          </>
        )}
      </ContentContainer>
    </MainContainer>
  );
};
