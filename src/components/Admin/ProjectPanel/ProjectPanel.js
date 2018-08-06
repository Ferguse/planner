import React, { PureComponent } from 'react';

// styled
import Box from './styled/Box';
import Container from './styled/Container';
import PropTypes from 'prop-types';

class ProjectPanel extends PureComponent {
  state = {
    activePanel: false
  }
  handleChangeTitle = event =>
    this.props.changeTitleProject(event.target.value);

  handleChangeContent = event =>
    this.props.changeContentProject(event.target.value);

  handleChangeColor = event =>
    this.props.changeColorProject(event.target.value);

  handleDeleteProject = () =>
    this.props.deleteProject();
  handleShowUserPanel = () =>
    this.setState(({ activePanel }) => ({ activePanel: !activePanel }));

  render() {
    const { project } = this.props;
    return (
      <Container>
        <Box>
          <label htmlFor="title">Title</label>
          <input onChange={this.handleChangeTitle} id='title' type="text" value={project.get('title')}/>
        </Box>
        <Box>
          <label htmlFor="content">Content</label>
          <textarea onChange={this.handleChangeContent} rows='5' id='content' type="text" value={project.get('content')}/>
        </Box>
        <Box>
          <label htmlFor="color">Color</label>
          <input onChange={this.handleChangeColor} id='color' type="text" value={project.get('color')}/>
        </Box>
        <button type='button' onClick={this.handleDeleteProject}>Delete project</button>
        <Box>
          <p>Users</p>
        </Box>
        <button onClick={this.handleShowUserPanel}></button>
      </Container>
    )
  }
}

ProjectPanel.propTypes = {
  project: PropTypes.object.isRequired,
  changeTitleProject: PropTypes.func.isRequired,
  changeContentProject: PropTypes.func.isRequired,
  changeColorProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired

};

export default ProjectPanel;
