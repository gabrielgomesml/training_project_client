import React from 'react';
import Slider from 'react-slick';
import {
  MainContainer,
  Image,
  ContentContainer,
  TextContainer,
  TagsContainer,
  Tag,
  SlickContainer,
  SuggestionBox,
  SuggestionTitle,
} from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Suggestion = {
  id: string;
  title: string;
};

interface FilmBoxProps {
  title: string;
  text: string;
  genres: string[];
  image: any;
  suggestions: Suggestion[];
}

export const FilmBox: React.ElementType<FilmBoxProps> = ({
  title,
  text,
  genres,
  image,
  suggestions,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      suggestions && suggestions.length < 3 ? suggestions.length : 3,
    slidesToScroll: 1,
  };
  return (
    <MainContainer>
      <ContentContainer>
        <Image src={image} />
        <TextContainer>
          <h1>{title}</h1>
          <p>2019</p>
          <TagsContainer>
            {genres.map((genre) => (
              <Tag>
                <p style={{ color: 'white' }}>{genre}</p>
              </Tag>
            ))}
          </TagsContainer>
        </TextContainer>
      </ContentContainer>
      <p>{text}</p>
      <SlickContainer>
        <Slider {...settings}>
          {suggestions.map((suggestion) => (
            <div>
              <SuggestionBox>
                <SuggestionTitle>{suggestion.title}</SuggestionTitle>
              </SuggestionBox>
            </div>
          ))}
        </Slider>
      </SlickContainer>
    </MainContainer>
  );
};
