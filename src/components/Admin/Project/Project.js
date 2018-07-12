import React, { PureComponent } from 'react';

// styled
import Box from './styled/Box';
import Container from './styled/Container';
import PropTypes from 'prop-types';

class Project extends PureComponent {
  render() {
    const {
      handleChange,
      i,
      handleDelete,
      item
    } = this.props;
    return (
      <Container>
        <Box>
          <label htmlFor="title">Title</label>
          <input onChange={handleChange} index={i} id='title' type="text" value={item.get('title')}/>
        </Box>
        <Box>
          <label htmlFor="content">Content</label>
          <textarea onChange={handleChange} index={i} rows='5' id='content' type="text" value={item.get('content')}/>
        </Box>
        <Box>
          <label htmlFor="color">Color</label>
          <input onChange={handleChange} index={i} id='color' type="text" value={item.get('color')}/>
        </Box>
        <button type='button' onClick={handleDelete.bind(null, i)}>Delete project</button>
        <Box>
          <p>Users</p>
        </Box>
      </Container>
    )
  }
}

Project.propTypes = {
  i: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Project;
