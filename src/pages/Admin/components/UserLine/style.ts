import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;

  .popcorn_toggle.react-toggle--checked .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.mainRed};
  }

  .popcorn_toggle.react-toggle--checked .react-toggle-thumb {
    border-color: ${({ theme }) => theme.colors.mainRed};
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
`;
