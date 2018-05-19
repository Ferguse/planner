import React, {Component} from 'react';
import Immutable from 'immutable'
import './Admin.css';
// import User from '../User/User';
import {projectSelector} from '../../Selectors/selectors';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

// reducers
import { dataChanged, dataChangedUser, deleteProject, deleteUser, dataChangedUserDate } from '../../redux/reducers'

// styles
import {
  Container,
  Project,
  Box,
  Title,
  Nav,
  User,
  UserPannel,
  UserItem,
  Users,
  UserLine
} from './Admin.styled';

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
        <Nav>
          {
            this.props.projects.map((item, i) => (
              <Title
                onClick={this.handleClick.bind(null, i)}
                isActive={this.state.isActive === i}
                key={i}
              >
                <button type='button'>
                  <span>
                    {item.get('title')}
                  </span>
                </button>
              </Title>
            ))
          }
        </Nav>
        {
          this.props.projects.map((item, i) => {
            const userName = item.get('user')
            return (
              <Project isActive={this.state.isActive === i}>
                <Box>
                  <label htmlFor="title">Title</label>
                  <input onChange={this.handleChange} index={i} id='title' type="text" value={item.get('title')}/>
                </Box>
                <Box>
                  <label htmlFor="content">Content</label>
                  <textarea onChange={this.handleChange} index={i} rows='5' id='content' type="text" value={item.get('content')}/>
                </Box>
                <Box>
                  <label htmlFor="color">Color</label>
                  <input onChange={this.handleChange} index={i} id='color' type="text" value={item.get('color')}/>
                </Box>
                <button type='button' onClick={this.handleDelete.bind(null, i)}>Delete project</button>
                <Box>
                  <p>Users</p>
                </Box>
                <UserPannel>
                  <div>
                    {
                      item.get('workload').map((i, index) =>
                        <UserItem
                          onClick={this.handleClickUser.bind(null, index)}
                          user={this.state.user === index}
                          key={i}
                        >
                          <span>{i.get('user')}</span>
                        </UserItem>
                      )
                    }
                  </div>
                  <Users>
                    {
                      item.get('workload').map((workload, index) => (
                        <User
                          key={index}
                          user={this.state.user === index}
                        >
                          <UserLine>
                            <label htmlFor="user">User</label>
                            <input
                              onChange={this.handleChangeUser}
                              title='user'
                              index={i}
                              type='text'
                              value={workload.get('user')}
                              username={workload.get('user')}
                              userindex={index}
                            />
                          </UserLine>
                          <UserLine>
                            <label htmlFor="percent">Percent</label>
                            <input
                              onChange={this.handleChangeUser}
                              title='percent'
                              index={i}
                              type='text'
                              value={workload.get('percent')}
                              username={workload.get('user')}
                              userindex={index}
                            />
                          </UserLine>
                          {
                            workload.get('dates').map((date, it) => (
                              <div key={it}>
                                <UserLine>
                                  <label htmlFor="start">Project start</label>
                                  <input
                                    onChange={this.handleChangeUserDate}
                                    title='start'
                                    index={i}
                                    type="date"
                                    value={date.get('start')}
                                    username={workload.get('user')}
                                    stage='start'
                                    userindex={index}
                                  />
                                </UserLine>
                                <UserLine>
                                  <label htmlFor="end">Project end</label>
                                  <input
                                    onChange={this.handleChangeUserDate}
                                    title='end'
                                    index={i}
                                    type="date"
                                    value={date.get('end')}
                                    username={workload.get('user')}
                                    stage='end'
                                    userindex={index}
                                  />
                                </UserLine>
                              </div>
                            ))
                          }
                          <button type='button' onClick={this.handleDeleteUser.bind(null, index)}> Delete user</button>
                        </User>
                      ))
                    }
                  </Users>
                </UserPannel>
              </Project>
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
