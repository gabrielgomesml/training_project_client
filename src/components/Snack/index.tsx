import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { SnackContainer, Icon, CloseIcon } from './style';
import Close from '../../assets/icons/close.png';

export interface SnackProps {
  text: string;
  color: string;
  icon: any;
  showSnack: boolean;
  setShowSnack: (value: boolean) => void;
}

export const Snack: React.ComponentType<SnackProps> = ({
  text,
  color,
  icon,
  showSnack,
  setShowSnack,
}) => {
  const portalDiv = document.getElementById('root');
  const timeOutRef = useRef<ReturnType<typeof setTimeout>>();

  if (showSnack) {
    timeOutRef.current = setTimeout(() => {
      setShowSnack(false);
    }, 5000);
  }

  useEffect(
    () => () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
    },
    [],
  );

  return portalDiv && showSnack
    ? ReactDOM.createPortal(
        <SnackContainer style={{ backgroundColor: color }}>
          <Icon src={icon} />
          <p style={{ color: '#ffffff' }}>{text}</p>
          <CloseIcon onClick={() => setShowSnack(false)} src={Close} />
        </SnackContainer>,
        portalDiv,
      )
    : null;
};
