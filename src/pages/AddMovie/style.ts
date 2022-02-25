import styled from 'styled-components';

export const MainContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.mainGray};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px 20px;
  grid-template-areas:
    'title title title'
    'synopsis synopsis synopsis'
    'release_year select add_button';
  width: 760px;
  padding: 30px 30px 0px 30px;

  .title {
    grid-area: title;
  }

  .synopsis {
    grid-area: synopsis;
  }

  .release_year {
    grid-area: release_year;
  }

  .select {
    grid-area: select;
  }

  .add_button {
    grid-area: add_button;
    justify-self: end;
  }
`;
