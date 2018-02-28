import React, {Component} from 'react';
import './Admin.css';
import User from '../User/User';
import {projectSelector} from '../../Selectors/selectors';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

// styles
import {Container, Project, Box, Title} from './Admin.styled';

class Admin extends Component {
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
  };

  render() {
    let users = this.props.projects
      .map(i => i.get('workload').map(i => i.get('user')))
      .reduce((a, b) => a.concat(b))
      .toSet();

    return (
      <Container>
        {
          this.props.projects.map(item => (
            <Project>
              <Title>
                {item.get('title')}
              </Title>
              <Box>
                <label htmlFor="title">Title</label>
                <input id='title' type="text" value={item.get('title')}/>
              </Box>
              <Box>
                <label htmlFor="Content">Content</label>
                <textarea rows='5' id='Content' type="text" value={item.get('content')}/>
              </Box>
              <Box>
                <label htmlFor="color">Color</label>
                <input id='color' type="text" value={item.get('color')}/>
              </Box>

              {
                item.get('workload').map(i => (
                  <div>

                    <Box>
                      <label htmlFor="user">User</label>
                      <input id='user' type='text' value={i.get('user')}/>
                    </Box>

                    <Box>
                      <label htmlFor="percent">Percent</label>
                      <input id='percent' type='text' value={i.get('percent')}/>
                    </Box>
                    {
                      i.get('dates').map(i => (
                        <div>
                          <div>
                            <Box>
                              <label htmlFor="start">Project start</label>
                              <input id='start' type="date" value={i.get('start')}/>
                            </Box>
                          </div>
                          <div>
                            <Box>
                              <label htmlFor="end">Project end</label>
                              <input id='end' type="date" value={i.get('end')}/>
                            </Box>
                          </div>
                        </div>
                      ))
                    }

                  </div>
                ))
              }

              {
                console.log(item.toJS())
              }

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
