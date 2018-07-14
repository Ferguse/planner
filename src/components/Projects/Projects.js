import React, { Component } from 'react';
import Project from '../Project';
import Header from '../Header'

//styled
import { Container } from './Projects.styled';

class Projects extends Component {
  render() {
    const {
      month,
      year,
      changeMonth,
      users,
      projects,
      selectedProject
    } = this.props;

    return (
      <Container>
        <Header
          month={month}
          year={year}
          changeMonth={changeMonth}
        />
        <div>
          {
            projects
              .toList()
              .map(project => {
              return (
                <Project
                  month={month}
                  key={project.get('id')}
                  project={project}
                  users={users}
                  selectedProject={selectedProject}
                />
              )
            })
          }
        </div>
      </Container>
    );
  }
}

export default Projects;
