import React, {Component} from 'react';
import './Admin.css';
// import User from '../User/User';
import {projectSelector} from '../../Selectors/selectors';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

// styles
import {Container, Project, Box, Title, Nav, User, UserPannel, UserItem, Users, UserLine} from './Admin.styled';

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

  render() {
    return (
      <Container>
        <Nav>
          {
            this.props.projects.map((item, i) => (
              <Title onClick={this.handleClick.bind(null, i)} isActive={this.state.isActive === i}>
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
          this.props.projects.map((item, i) => (
            <Project isActive={this.state.isActive === i}>
              <Box>
                <label htmlFor="title">Title</label>
                <input onChange={this.handleChange} id='title' type="text" value={item.get('title')}/>
              </Box>
              <Box>
                <label htmlFor="Content">Content</label>
                <textarea rows='5' id='Content' type="text" value={item.get('content')}/>
              </Box>
              <Box>
                <label htmlFor="color">Color</label>
                <input id='color' type="text" value={item.get('color')}/>
              </Box>
              <Box>
                <p>Users</p>
              </Box>
              <UserPannel>
                <div>
                  {
                    item.get('workload').map((i, index) =>
                      <UserItem onClick={this.handleClickUser.bind(null, index)} user={this.state.user === index}>
                        <span>{i.get('user')}</span>
                      </UserItem>
                    )
                  }
                </div>
                <Users>
                  {
                    item.get('workload').map((i, index) => (
                      <User user={this.state.user === index}>
                        <UserLine>
                          <label htmlFor="user">User</label>
                          <input id='user' type='text' value={i.get('user')}/>
                        </UserLine>
                        <UserLine>
                          <label htmlFor="percent">Percent</label>
                          <input id='percent' type='text' value={i.get('percent')}/>
                        </UserLine>
                        {
                          i.get('dates').map(i => (
                            <div>
                              <UserLine>
                                  <label htmlFor="start">Project start</label>
                                  <input id='start' type="date" value={i.get('start')}/>
                              </UserLine>
                              <UserLine>
                                  <label htmlFor="end">Project end</label>
                                  <input id='end' type="date" value={i.get('end')}/>
                              </UserLine>
                            </div>
                          ))
                        }

                      </User>
                    ))
                  }
                </Users>
              </UserPannel>
            </Project>
          ))
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
