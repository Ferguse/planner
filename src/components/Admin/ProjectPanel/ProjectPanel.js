import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styled
import Box from './styled/Box';
import Container from './styled/Container';
import Button from '../styled/Button';
import Delete from '../styled/Delete';

// icon
import trash from '../../../assets/icons/trash.png';

class ProjectPanel extends PureComponent {
  handleChangeTitle = event =>
    this.props.changeTitleProject(event.target.value);

  handleChangeContent = event =>
    this.props.changeContentProject(event.target.value);

  handleChangeColor = event =>
    this.props.changeColorProject(event.target.value);

  handleDeleteProject = () =>
    this.props.deleteProject();

  render() {
    const { project, handleShowUserPanel } = this.props;
    return (
      <Container>
        <div>
          <Box>
            <label htmlFor='title'>Title</label>
            <input onChange={this.handleChangeTitle} id='title' type='text' value={project.get('title')}/>
          </Box>
          <Box>
            <label htmlFor='content'>Content</label>
            <textarea onChange={this.handleChangeContent} rows='5' id='content' type='text' value={project.get('content')}/>
          </Box>
          <Box>
            <label htmlFor='color'>Color</label>
            <input onChange={this.handleChangeColor} id='color' type='text' value={project.get('color')}/>
          </Box>
          <Delete
            type='button'
            onClick={this.handleDeleteProject}
            color='darkred'
          >
            <img src={trash} alt='trash' />
          </Delete>
        </div>
        <Button
          onClick={handleShowUserPanel}
          color='green'
        >
          EDIT USERS
        </Button>
      </Container>
    );
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
