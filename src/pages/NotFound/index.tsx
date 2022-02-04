import React from 'react';
import { MainContainer, Title, Subtitle, Image } from './style';
import CornImage from '../../assets/icons/corn.png';

export const NotFound: React.FC = () => (
  <MainContainer>
    <Image src={CornImage} />
    <Title>404</Title>
    <Subtitle>The corn hasn't popped yet. Page not found</Subtitle>
  </MainContainer>
);
