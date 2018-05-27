import React, {Component} from 'react';
import Immutable from 'immutable'
// import User from '../User/User';
import {projectSelector} from '../../Selectors/selectors';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

// reducers
import { dataChanged, dataChangedUser, deleteProject, deleteUser, dataChangedUserDate } from '../../redux/reducers'

// styles
import Container from './styles/Container';
import Main from './Main';

// components
import Navigation from './Navigation';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Неизвестный пользователь',
      inputColorValue: '',
      isOpen: false,
      isActive: 0,
      user: 0
    };
  }

  updateColorValue = e => {
    this.setState({
      inputColorValue: e.target.value
    });
  };

  handleChange = (event) => {
    const data = {
      title: event.target.getAttribute('id'),
      index: event.target.getAttribute('index'),
      value: event.target.value
    };
    this.props.dispatch(dataChanged(data));
  };

  handleChangeUser = (event) => {
    const data = {
      title: event.target.getAttribute('title'),
      index: event.target.getAttribute('index'),
      userindex: event.target.getAttribute('userindex'),
      value: event.target.value
    };
    this.props.dispatch(dataChangedUser(data));
  };

  handleChangeUserDate = (event) => {
    const data = {
      user: event.target.getAttribute('username'),
      title: event.target.getAttribute('title'),
      index: event.target.getAttribute('index'),
      stage: event.target.getAttribute('stage'),
      value: event.target.value,
      userindex: event.target.getAttribute('userindex')
    };
    this.props.dispatch(dataChangedUser(data));
  };

  handleClick = (index) => {
    this.setState({
      isActive: index,
      user: 0
    });
  };

  handleClickUser = (index) => {
    this.setState({
      user: index
    });
  };

  handleDelete = (item) => {
    this.props.dispatch(deleteProject(item));
  };

  handleDeleteUser = (item) => {
    this.props.dispatch(deleteUser(item));
  };

  render() {
    return (
      <Container>
       <Navigation
         projects={this.props.projects}
         handleClick={this.handleClick}
         isActive={this.state.isActive}
       />
        {
          this.props.projects.map((item, i) => {
            return (
              <Main
                key={i}
                i={i}
                item={item}
                isActive={this.state.isActive}
                handleChange={this.handleChange}
                user={this.state.user}
                handleDeleteUser={this.handleDeleteUser}
                handleDelete={this.handleDelete}
                handleChangeUser={this.handleChangeUser}
                handleClickUser={this.handleClickUser}
              />
            )
            }
          )
        }
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
export default connect(selector)(Admin);
