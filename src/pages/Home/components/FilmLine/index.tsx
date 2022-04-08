import React from 'react';
import { MainContainer, Image, ContentContainer } from './style';

interface FilmLineProps {
  title: string;
  text: string;
  image: any;
  handleClick: () => void;
}

export const FilmLine: React.ElementType<FilmLineProps> = ({
  title,
  text,
  image,
  handleClick,
}) => (
  <MainContainer data-testid="film-line-component" onClick={handleClick}>
    <Image src={image} />
    <ContentContainer>
      <h1>{title}</h1>
      <p>{text}</p>
    </ContentContainer>
  </MainContainer>
);
