import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: ${({ theme }) => theme.fonts.mitr};
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    color: ${({ theme }) => theme.colors.greyscale.grey1};
    margin: 0;
    padding: 0;
    height: 100%;
    background: linear-gradient(135deg, rgba(254,249,170,1) 0%, rgba(255,1,1,1) 100%, rgba(0,212,255,1) 100%);
  }
  #root {
    height: 100%
  }
  @font-face {
    font-family: 'Mitr';
    font-weight: 200;
    src: local('Mitr'), url(./fonts/Mitr/Mitr-ExtraLight.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Mitr';
    font-weight: 300;
    src: local('Mitr'), url(./fonts/Mitr/Mitr-Light.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Mitr';
    font-weight: 400;
    src: local('Mitr'), url(./fonts/Mitr/Mitr-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Mitr';
    font-weight: 500;
    src: local('Mitr'), url(./fonts/Mitr/Mitr-Medium.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Mitr';
    font-weight: 600;
    src: local('Mitr'), url(./fonts/Mitr/Mitr-SemiBold.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Mitr';
    font-weight: 700;
    src: local('Mitr'), url(./fonts/Mitr/Mitr-Bold.ttf) format('truetype');
  }
`;

export default GlobalStyle;
