import React, { Component } from 'react';
import './Users.css';
import User from '../User/User';
import Header from '../Header/Header'
import { projectSelector } from '../../Selectors/selectors';
import { createSelector } from "reselect";
import { connect } from "react-redux";

// styles
import { Container } from './Users.styled'

class Users extends Component {
  constructor(props) {
    super(props);
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
    let users = this.props.projects
      .map(i => i.get('workload').map(i => i.get('user')))
      .reduce((a, b) => a.concat(b))
      .toSet();

    return (
      <Container>
        <Header
          month={this.state.month}
          year={this.state.year}
          changeMonth={this.props.changeMonth}
        />
        <div className="main__content">
          {
            users.map(item => {
              return <User
                month={this.props.month}
                key={item.id}
                user={item}
              />
            })
          }
        </div>
      </Container>
    );
  }
}

const selector = createSelector(
  projectSelector,
  (projects) => ({
    projects
  })
);
export default connect(selector)(Users);
