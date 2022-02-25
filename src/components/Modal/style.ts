import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ModalProps
  extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>> {
  modalActive?: boolean;
}

export const ModalBody = styled.div<ModalProps>`
  width: 100%;
  height: 100%;
  background-color: rgb(19, 19, 19, 0.5);
  position: fixed;
  z-index: 10000000000;
  top: 0;
  left: 0;
  display: ${(props) => (props.modalActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  overflow: auto;
  overflow-y: auto;
`;

export const ModalContainer = styled.div``;
