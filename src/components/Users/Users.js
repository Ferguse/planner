import React, { Component } from 'react';

// container
import User from './User/User';
import Header from '../Header/Header'

// styled
import Container from './styled/Container';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: 'Неизвестный пользователь',
      inputColorValue: '',
      isOpen: false
    };
  }

  updateColorValue = e => {
    this.setState({
      inputColorValue: e.target.value
    });
  }

  render() {
    // let users = this
    //   .props
    //   .projects
    //   .map(i => i.get('workload').map(i => i.get('user')))
    //   .reduce((a, b) => a.concat(b))
    //   .toSet();
    return (
      <Container>
        <Header
          month={this.state.month}
          year={this.state.year}
          changeMonth={this.props.changeMonth}
        />
        <div className="main__content">
          {
            this.props.users.toList().map(item => {
              return <User
                month={this.props.month}
                key={item}
                user={item}
                projects={this.props.projects}
              />
            })
          }
        </div>
      </Container>
    );
  }
}

export default Users;
