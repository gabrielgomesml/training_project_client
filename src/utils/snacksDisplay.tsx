import theme from '../assets/styles/theme';
import Check from '../assets/icons/check.png';
import Error from '../assets/icons/error.png';

interface SnackInfos {
  text: string;
  color: string;
  icon: any;
}

export const snacksDisplay = (
  func:
    | 'LOADUSERS'
    | 'CHANGEUSERS'
    | 'LOADGENRES'
    | 'CREATEMOVIE'
    | 'RELATEMOVIETOUSER'
    | 'RELATEMOVIETOGENRES',
  setDisplay: (value: boolean) => void,
  setInfos: (value: SnackInfos) => void,
  status?: number,
) => {
  switch (func) {
    case 'CREATEMOVIE':
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
      break;
    case 'LOADGENRES':
      setInfos({
        text: 'Erro ao carregar os gêneros. Tente novamente mais tarde.',
        color: theme.colors.mainRed,
        icon: Error,
      });
      setDisplay(true);
      break;
    case 'RELATEMOVIETOUSER':
      setInfos({
        text: 'Erro ao relacionar o filme com seu usuário. Tente novamente mais tarde.',
        color: theme.colors.mainRed,
        icon: Error,
      });
      setDisplay(true);
      break;
    case 'RELATEMOVIETOGENRES':
      setInfos({
        text: 'Erro ao relacionar os gêneros com o filme. Tente novamente mais tarde.',
        color: theme.colors.mainRed,
        icon: Error,
      });
      setDisplay(true);
      break;
    case 'LOADUSERS':
      setInfos({
        text: 'Erro ao carregar usuários. Tente novamente mais tarde.',
        color: theme.colors.mainRed,
        icon: Error,
      });
      setDisplay(true);
      break;
    case 'CHANGEUSERS':
      setInfos({
        text: 'Permissionamento do usuário não alterado. Tente novamente mais tarde.',
        color: theme.colors.mainRed,
        icon: Error,
      });
      setDisplay(true);
      break;
    default:
      break;
  }
};
