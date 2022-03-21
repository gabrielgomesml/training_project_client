import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.scss';

type Suggestion = {
  id: string;
  title: string;
};

interface FilmBoxProps {
  title: string;
  release_year: string;
  text: string;
  genres: string[];
  image: any;
  suggestions: Suggestion[];
}

export const FilmBox: React.ElementType<FilmBoxProps> = ({
  title,
  release_year,
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
    <div className="main-container">
      <div className="content-container">
        <img className="image" src={image} alt="movie-poster" />
        <div className="text-container">
          <h1>{title}</h1>
          <p>{release_year}</p>
          <div className="tags-container">
            {genres.map((genre) => (
              <div className="tag">
                <p style={{ color: 'white' }}>{genre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p>{text}</p>
      <div className="slick-container">
        <Slider {...settings}>
          {suggestions.map((suggestion) => (
            <div>
              <div className="suggestion-box">
                <p className="suggestion-title">{suggestion.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
