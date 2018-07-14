import React, {Component} from 'react';

// styled
import Container from './styled/Container';
import Main from './Main';

// components
import Navigation from './Navigation';

class Admin extends Component {

  render() {
    const { projects, selectedProject } = this.props;
    const currentProject = projects.get(selectedProject);
    return (
      <Container>
        <Navigation
          projects={projects}
          isActive={selectedProject}
        />
        <Main project={currentProject} />
      </Container>
    );
  }
}

export default Admin;
