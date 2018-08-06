import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import Item from './styled/Item';


class Menu extends PureComponent {
  handleClick = item => () =>
    this.props.handleClick(item);

  render() {
    return (
      <Container>
        <ul>
          <Item
            onClick={this.handleClick('Profile')}
            isActivePage={this.props.accountActivePage === 'Profile'}
          >
            Profile
          </Item>
          <Item
            onClick={this.handleClick('Settings')}
            isActivePage={this.props.accountActivePage === 'Settings'}
          >
            Settings
          </Item>
          <Item
            onClick={this.handleClick('Help')}
            isActivePage={this.props.accountActivePage === 'Help'}
          >
            Help
          </Item>
        </ul>
      </Container>
    )
  }
};

export default Menu;
