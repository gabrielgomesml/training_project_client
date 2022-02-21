import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavItem, NavText, Photo } from './style';
import ProfileImage from '../../assets/icons/profile_image.png';

interface NavbarProps {
  role: number;
  photo: string;
}

export const Navbar: React.ElementType<NavbarProps> = ({ role, photo }) => (
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
    <Link to="/pagina-inicial">
      <Photo src={photo || ProfileImage} />
    </Link>
  </NavContainer>
);
