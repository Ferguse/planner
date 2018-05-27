import React, { Fragment } from 'react';

// styles
import Box from './styles/Box';
import Container from './styles/Container';

const Project = ({ i, handleChange, handleDelete, item }) => (
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
);

export default Project;
