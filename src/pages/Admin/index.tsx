import React, { useState, useEffect, useCallback, useRef } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { MainContainer, ContentContainer } from './style';
import { Modal, Snack } from '../../components';
import { UserLine } from './components/UserLine';
import { ConfirmationBox } from './components/ConfirmationBox';
import api from '../../services/api';
import { UsersData } from './types';
import loader from '../../hoc/loader';
import { snacksDisplay } from '../../utils/snacksDisplay';

interface AdminProps {
  setLoading: (value: boolean) => void;
}

const Admin: React.FC<AdminProps> = ({ setLoading }) => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<UsersData[]>([]);
  const [showSnack, setShowSnack] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    active: false,
  });
  const [snackInfos, setSnackInfos] = useState({
    text: '',
    color: '',
    icon: null,
  });
  const token = Cookies.get('@training-project:token');

  const history = useHistory();
  const redirectRef = useRef<ReturnType<typeof setTimeout>>();

  const errorRedirect = useCallback(() => {
    redirectRef.current = setTimeout(() => {
      history.push('/pagina-inicial');
    }, 6000);
  }, [history]);

  const loadUsers = useCallback(async () => {
    try {
      const headers = {
        authorization: `Bearer ${token?.replace(/["]+/g, '')}`,
      };
      const response = await fetch(`${api}users`, {
        headers,
      });
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      snacksDisplay('LOADUSERS', setShowSnack, setSnackInfos);
      setLoading(false);
      errorRedirect();
    }
  }, [errorRedirect, setLoading, token]);

  const changeAccess = useCallback(async () => {
    try {
      const requestOptions = {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token?.replace(/["]+/g, '')}`,
        },
        body: JSON.stringify({ active: !selectedUser.active }),
      };
      await fetch(`${api}users/${selectedUser.id}`, {
        ...requestOptions,
      });
      setShowModal(false);
      loadUsers();
    } catch (error) {
      snacksDisplay('CHANGEUSERS', setShowSnack, setSnackInfos);
    }
  }, [loadUsers, selectedUser.active, selectedUser.id, token]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <MainContainer>
      <Snack
        text={snackInfos.text}
        showSnack={showSnack}
        setShowSnack={setShowSnack}
        color={snackInfos.color}
        icon={snackInfos.icon}
      />
      <ContentContainer>
        <h1 style={{ alignSelf: 'flex-start' }}>Usuários</h1>
        {users.length === 0 ? (
          <h3>Usuários não encontrados.</h3>
        ) : (
          users.map(
            ({
              id,
              name,
              surname,
              email,
              phone,
              role,
              active,
              photo_address,
            }) => (
              <UserLine
                key={id}
                name={`${name} ${surname}`}
                email={email}
                phone={phone || '-'}
                role={role}
                active={active}
                image={photo_address}
                handleClick={() => {
                  setShowModal(true);
                  setSelectedUser({
                    id,
                    name: `${name} ${surname}`,
                    active,
                  });
                }}
              />
            ),
          )
        )}
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ConfirmationBox
            id={selectedUser.id}
            name={selectedUser.name}
            cancelButton={() => setShowModal(false)}
            confirmButton={() => changeAccess()}
          />
        </Modal>
      </ContentContainer>
    </MainContainer>
  );
};

export default loader(Admin);
