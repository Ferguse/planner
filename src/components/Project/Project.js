import React, { Component } from 'react';

// styled
import Info from '../Info/Info';
import Header from './styled/Header';
import Name from './styled/Name';
import Data from './styled/Data';

class Project extends Component {
  getColor = (num) => {
    let opacity = 10;
    this.props.users.forEach(item => {

      var result = this.props.project.get('workload')
        .filter(i => {
          return i.get('user') === item.get('name')
        })
        .filter(i => {

          return (i.get('weeks')) ? i.get('weeks').includes(num) : false
        })
      if (result.length > 0) opacity += result[0].percent;
    })

    return {
      'background': this.props.project.get('color'),
      'opacity': opacity / 100
    };
  };

  handleOpenModal = project => () => this.props.showModalProject(project)

  render() {
    const {
      project,
      users,
      month
    } = this.props;
    return (
      <div>
        <Header>
          <Name>
            <p
              style={{ background: project.get('color') }}
              onMouseOver={this.handleOpenModal(project)}
              onMouseLeave={this.props.closeModalProject}
            >
              {project.get('title')}
            </p>
          </Name>
        </Header>
        <Data>
          {
            users
              .toList()
              .map((user, i) => (
                <Info
                  month={month}
                  key={i}
                  user={user}
                  project={project}
                  title={project.get('title')}
                />
              ))
          }
        </Data>
      </div>
    );
  }
}

export default Project;
