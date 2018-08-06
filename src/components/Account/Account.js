import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import LeftAside from './styled/LeftAside';
import RightAside from './styled/RightAside';

// components
import Menu from './Menu';
import Main from './Main';


class Account extends PureComponent {
  handleClick = currentPage =>
    this.props.changeAccountPage(currentPage);

  render() {
    return (
      <Container>
        <LeftAside>
          <Menu
            handleClick={this.handleClick}
            accountActivePage={this.props.accountActivePage || 'profile'}
          />
        </LeftAside>
        <RightAside>
          <Main
            accountActivePage={this.props.accountActivePage || 'profile'}
          />
        </RightAside>
      </Container>
    );
  }
}

export default Account;
