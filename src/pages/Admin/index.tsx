import React, { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { MainContainer, ContentContainer } from './style';
import { Modal } from '../../components';
import { UserLine } from './components/UserLine';
import { ConfirmationBox } from './components/ConfirmationBox';
import api from '../../services/api';
import { UsersData } from './types';
import loader from '../../hoc/loader';

interface AdminProps {
  setLoading: (value: boolean) => void;
}

const Admin: React.FC<AdminProps> = ({ setLoading }) => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<UsersData[]>([]);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    active: false,
  });
  const token = Cookies.get('@training-project:token');

  const loadUsers = useCallback(async () => {
    const headers = {
      authorization: `Bearer ${token.replace(/["]+/g, '')}`,
    };
    const response = await fetch(`${api}users`, {
      headers,
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  }, [setLoading, token]);

  const changeAccess = useCallback(async () => {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token.replace(/["]+/g, '')}`,
      },
      body: JSON.stringify({ active: !selectedUser.active }),
    };
    await fetch(`${api}users/${selectedUser.id}`, {
      ...requestOptions,
    });
    setShowModal(false);
    loadUsers();
  }, [loadUsers, selectedUser.active, selectedUser.id, token]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <MainContainer>
      <ContentContainer>
        {users.map(
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
