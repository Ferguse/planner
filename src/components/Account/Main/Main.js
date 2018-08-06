import React, { PureComponent } from 'react';
// styled
import Container from './styled/Container';
// components
import Profile from '../Profile';
import Settings from '../Settings';
import Help from '../Help';

const returnFunc = (accountActivePage) => {
  switch (accountActivePage) {
    case 'Profile': {
      return <Profile />;
    }
    case 'Settings': {
      return <Settings />;
    }
    case 'Help': {
      return <Help />;
    }
    default:
      return <Profile />;
  }
};

class Main extends PureComponent {
  render() {
    return (
      <Container>
        {
          returnFunc(this.props.accountActivePage)
        }
      </Container>
    )
  }
};

export default Main;
