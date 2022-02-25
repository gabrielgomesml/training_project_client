import theme from '../assets/styles/theme';
import Check from '../assets/icons/check.png';
import Error from '../assets/icons/error.png';

interface SnackInfos {
  text: string;
  color: string;
  icon: any;
}

export const snacksDisplay = (
  status: number,
  setDisplay: (value: boolean) => void,
  setInfos: (value: SnackInfos) => void,
) => {
  if (status === 201) {
    setInfos({
      text: 'Filme adicionado a sua lista',
      color: theme.colors.mainGreen,
      icon: Check,
    });
    setDisplay(true);
  } else {
    setInfos({
      text: 'Filme não adicionado a sua lista, por favor tente mais tarde',
      color: theme.colors.mainRed,
      icon: Error,
    });
    setDisplay(true);
  }
};
