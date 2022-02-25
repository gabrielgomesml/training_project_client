import React from 'react';
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

export const Snack: React.ElementType<SnackProps> = ({
  text,
  color,
  icon,
  showSnack,
  setShowSnack,
}) => {
  const portalDiv = document.getElementById('root');

  if (showSnack) {
    setTimeout(() => {
      setShowSnack(false);
    }, 5000);
  }
  if (!showSnack) {
    return null;
  }
  return portalDiv
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
