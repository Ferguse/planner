import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';

// components
import Profile from '../Profile';
import Settings from '../Settings';
import About from '../About';
import License from '../License';

const returnFunc = (accountActivePage) => {
  switch (accountActivePage) {
    case 'Profile': {
      return <Profile />;
    }
    case 'Settings': {
      return <Settings />;
    }
    case 'About': {
      return <About />;
    }
    case 'License': {
      return <License />;
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
