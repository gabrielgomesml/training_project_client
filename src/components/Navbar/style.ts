import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 40px;
  max-width: 760px;
  background-color: ${({ theme }) => theme.colors.secondaryGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavItem = styled.div`
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryRed};
  }

  transition: background-color 0.1s ease-in;
`;

export const NavText = styled.p`
  color: ${({ theme }) => theme.colors.mainWhite};
  font-weight: bold;
`;

export const Photo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
