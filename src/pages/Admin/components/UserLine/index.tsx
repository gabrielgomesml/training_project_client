import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { MainContainer, Image, ContentContainer } from './style';

interface UserLineProps {
  name: string;
  email: string;
  phone: string;
  role: number;
  active: boolean;
  image: any;
  handleClick: () => void;
}

export const UserLine: React.ElementType<UserLineProps> = ({
  name,
  email,
  phone,
  role,
  active,
  image,
  handleClick,
}) => (
  <MainContainer style={{ opacity: active ? 1 : 0.4 }}>
    <Image src={image} />
    <ContentContainer>
      <p>
        <b>Nome: </b>
        {name}
      </p>
      <p>
        <b>E-mail: </b>
        {email}
      </p>
      <p>
        <b>Telefone: </b>
        {phone}
      </p>
      <p>
        <b>Cargo: </b>
        {role === 1 ? 'Admin' : 'Comum'}
      </p>
    </ContentContainer>
    <div style={{ position: 'absolute', right: 0 }}>
      <Toggle
        checked={active}
        onChange={() => {
          handleClick();
        }}
        icons={false}
        className="popcorn_toggle"
      />
    </div>
  </MainContainer>
);
