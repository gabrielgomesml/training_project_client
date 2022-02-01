import React from 'react';
import { useAuth } from '../../hooks/auth';
import theme from '../../assets/styles/theme';
import { Button } from '../../components';

const Test: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <h1>PÁGINA DE TESTE</h1>
      <Button
        handleButton={() => signOut()}
        width={250}
        height={45}
        backgroundColor={theme.colors.mainRed}
        text="Login"
      />
    </>
  );
};

export default Test;
