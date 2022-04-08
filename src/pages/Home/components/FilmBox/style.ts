import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 760px;
  background-color: ${({ theme }) => theme.colors?.mainWhite};
  display: flex;
  flex-direction: column;
  padding: 20px 20px 40px 20px;
  gap: 20px;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;
  border: 1px solid;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors?.mainRed};
  padding: 5px 15px;
  border-radius: 20px;
`;

export const SlickContainer = styled.div`
  display: flex;
  width: 95%;
  min-height: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.colors?.mainBlack};
  }
`;

export const SuggestionBox = styled.div`
  height: 100px;
  background-color: red;
  margin: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://img.elo7.com.br/product/original/2747CBC/big-poster-filme-aladdin-2019-lo01-tamanho-90x60-cm-nerd.jpg);

  background-size: cover;
  cursor: pointer;
`;

export const SuggestionTitle = styled.p`
  color: ${({ theme }) => theme.colors?.mainWhite};
  font-weight: bold;
`;
