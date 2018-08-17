import React, { Component } from 'react';
import Project from './Project';
import Header from '../Header'

//styled
import { Container } from './Projects.styled';

// components
import Modal from '../Modal/Modal';

class Projects extends Component {
  render() {
    const {
      month,
      year,
      changeMonth,
      users,
      projects,
      selectedProject,
      showModalProject,
      closeModalProject,
      modalProject
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
                  showModalProject={showModalProject}
                  closeModalProject={closeModalProject}
                />
              )
            })
          }
        </div>
        {
          modalProject &&
            <Modal onClose={closeModalProject}>
              <h2>
                Title: {modalProject.get('title')}
              </h2>
              <p>
                <b>Description</b>: {modalProject.get('content')}
              </p>
              <p>
                <b>Staffs</b>: {
                  modalProject.get('users').map((item, i, map) =>
                    `${users.getIn([item, 'name'])}${
                    (i === map.size - 1) ? ' ' : ', '}`
              )}
              </p>
              <p>
                <b>Recent change</b>: {
                (modalProject.get('history')).size !== 0 ?
                  modalProject.get('history') :
                  'no data'
              }
              </p>
            </Modal>
        }
      </Container>
    );
  }
}

export default Projects;
