import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import Buttons from './styled/Buttons';
import Logo from './styled/Logo';
import Text from './styled/Text';

// icon
import icon from '../../../assets/icons/trash.png';

class License extends PureComponent {
  render() {
    return (
      <Container>
        <Logo>
          <img src={icon} alt='logo' />
          <p>Version 0.1.0</p>
        </Logo>
        <p>
          The following packages are used:
        </p>
        <Buttons href='https://github.com/Ferguse/planner'>
          <a href='https://github.com/axios/axios'>axios</a>
          <a href='https://github.com/babel/babel-eslint'>babel-eslint</a>
          <a href='https://www.npmjs.com/package/create-immutable-selector'>
            create-immutable-selector
          </a>
          <a href='https://github.com/yannickcr/eslint-plugin-react'>
            eslint-plugin-react
          </a>
          <a href='https://github.com/facebook/immutable-js'>immutable</a>
          <a href='https://github.com/moment/moment'>moment</a>
          <a href='https://github.com/necolas/normalize.css'>normalize.css</a>
          <a href='https://github.com/facebook/prop-types'>prop-types</a>
          <a href='https://github.com/getsentry/raven-js'>raven-js</a>
          <a href='https://github.com/facebook/react'>react</a>
          <a href='https://github.com/facebook/react'>react-dom</a>
          <a href='https://github.com/reactjs/react-redux'>react-redux</a>
          <a href='https://github.com/ReactTraining/react-router'>
            react-router-dom
          </a>
          <a href='https://github.com/reactjs/react-router-redux'>
            react-router-redux
          </a>
          <a href='https://github.com/facebookincubator/create-react-app'>
            react-scripts
          </a>
          <a href='https://github.com/acdlite/recompose'>recompose</a>
          <a href='https://github.com/gajus/redux-immutable'>redux-immutable</a>
          <a href='https://github.com/theaqua/redux-logger'>redux-logger</a>
          <a href='https://github.com/redux-saga/redux-saga'>redux-saga</a>
          <a href='https://github.com/reactjs/reselect'>reselect</a>
          <a href='https://github.com/styled-components/styled-components'>
            styled-components
          </a>
        </Buttons>
        <Text>
          <p>
            Copyright (c) 2018 Ivchenko Anton @ferguse
          </p>
          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </Text>
      </Container>
    );
  }
}

export default License;
