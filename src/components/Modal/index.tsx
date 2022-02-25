/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef } from 'react';

import { ModalBody, ModalContainer } from './style';

interface IModalProps {
  showModal: any;
  setShowModal: any;
}

export const Modal: React.ElementType<IModalProps> = ({
  children,
  showModal,
  setShowModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      const body = document.querySelector('body');
      if (body !== null && body.style.overflow === 'hidden') {
        body.style.overflow = 'visible';
      } else if (body !== null && body.style.overflow === 'visible') {
        body.style.overflow = 'hidden';
      }
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e: any) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    showModal && (
      <ModalBody modalActive={showModal} onClick={closeModal} ref={modalRef}>
        <ModalContainer>{children}</ModalContainer>
      </ModalBody>
    )
  );
};
