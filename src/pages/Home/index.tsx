import React, { useState } from 'react';
import { Modal, Input } from '../../components';
import { FilmLine } from './components/FilmLine';
import { FilmBox } from './components/FilmBox';
import { MainContainer, ContentContainer } from './style';
import Logo from '../../assets/icons/cinema.png';

export const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  return (
    <MainContainer>
      <ContentContainer>
        <Input
          type="text"
          value={search}
          onChangeAction={setSearch}
          width="100%"
          height="34px"
          placeholderName="Pesquise um filme..."
        />
        <FilmLine
          title="Filme A com B"
          text="A história desse filme fala um pouco sobre duas letras, A e B que quando
        estão juntas blá blá dasda dasdaded de ed e dad asd edadasdadasdad dasda
        dededadad adicionando mais palavras aqui p testar como que fica lá na
        pagina"
          image={Logo}
          handleClick={() => setShowModal(true)}
        />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <FilmBox
            title="Filme A com B"
            text="A história desse filme fala um pouco sobre duas letras, A e B que quando
        estão juntas blá blá dasda dasdaded de ed e dad asd edadasdadasdad dasda
        dededadad adicionando mais palavras aqui p testar como que fica lá na
        pagina"
            genres={['Ação', 'Romance', 'Suspense', 'Terror']}
            image={Logo}
            suggestions={[
              { id: '1', title: 'Filme 1' },
              { id: '2', title: 'Filme 2' },
              { id: '3', title: 'Filme 3' },
              { id: '4', title: 'Filme 4' },
            ]}
          />
        </Modal>
      </ContentContainer>
    </MainContainer>
  );
};
