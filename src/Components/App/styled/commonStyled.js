/* eslint-disable */
import 'normalize.css/normalize.css';
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;

    // hide scrollbars on windows
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: none;
      border-radius: 0;
    }

    &::-webkit-scrollbar-thumb {
      border: transparent 1px solid;
      background-color: transparent;
    }
  }

  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
