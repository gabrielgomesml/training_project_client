import styled from 'styled-components';

export const SnackContainer = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  position: fixed;
  z-index: 2;
  right: 10px;
  top: 10px;
  border-radius: 5px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

export const CloseIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 10px;
  align-self: flex-start;
  object-fit: cover;
  cursor: pointer;
`;
