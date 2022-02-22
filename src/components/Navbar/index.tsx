import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import {
  NavContainer,
  NavItem,
  NavText,
  Photo,
  OptionsContainer,
} from './style';
import ProfileImage from '../../assets/icons/profile_image.png';

interface NavbarProps {
  role: number;
  photo: string;
}

export const Navbar: React.ElementType<NavbarProps> = ({ role, photo }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const { signOut } = useAuth();
  return (
    <NavContainer>
      <div style={{ display: 'flex' }}>
        <Link style={{ textDecoration: 'none' }} to="/pagina-inicial">
          <NavItem>
            <NavText>Página Inicial</NavText>
          </NavItem>
        </Link>
        {role === 1 && (
          <Link style={{ textDecoration: 'none' }} to="/pagina-inicial">
            <NavItem>
              <NavText>Admin</NavText>
            </NavItem>
          </Link>
        )}
      </div>
      <Photo
        onClick={() => setOpenOptions(!openOptions)}
        src={photo || ProfileImage}
      />
      {openOptions && (
        <OptionsContainer>
          <NavItem>
            <NavText>Perfil</NavText>
          </NavItem>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <NavItem onClick={() => signOut()}>
              <NavText>Sair</NavText>
            </NavItem>
          </Link>
        </OptionsContainer>
      )}
    </NavContainer>
  );
};
