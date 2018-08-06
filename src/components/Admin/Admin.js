import React, { Component } from 'react';

// styled
import Container from './styled/Container';
import Main from './Main';

// components
import Navigation from './Navigation';

class Admin extends Component {
  state = {
    isShowUser: false
  };

  handleShowUserPanel = () =>
    this.setState(({ isShowUser }) => ({ isShowUser: !isShowUser }))

  render() {
    const { projects, selectedProject } = this.props;
    const currentProject = projects.get(selectedProject);
    return (
      <Container>
        <Navigation
          projects={projects}
          isActive={selectedProject}
        />
        <Main
          project={currentProject}
          isShowUser={this.state.isShowUser}
          handleShowUserPanel={this.handleShowUserPanel}
        />
      </Container>
    );
  }
}

export default Admin;
