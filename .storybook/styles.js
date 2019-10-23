import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'polished'

import Lato from './fonts/Lato-Regular.ttf'
import LatoLight from './fonts/Lato-Light.ttf'
import LatoBold from './fonts/Lato-Bold.ttf'
import LatoItalic from './fonts/Lato-Italic.ttf'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url(${Lato}) format('truetype'), local('Arial');
  }

  @font-face {
    font-family: 'LatoLight';
    font-style: normal;
    font-weight: 300;
    src: url(${LatoLight}) format('truetype'), local('Arial');
  }

  @font-face {
    font-family: 'LatoBold';
    font-style: normal;
    font-weight: 700;
    src: url(${LatoBold}) format('truetype'), local('Arial');
  }

  @font-face {
    font-family: 'LatoItalic';
    font-style: italic;
    font-weight: 400;
    src: url(${LatoItalic}) format('truetype'), local('Arial');
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body {
    margin: 8px;
  }
`;
