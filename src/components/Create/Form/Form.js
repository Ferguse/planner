import React from 'react';

// styled
import Box from './styled/Box';
import Input from './styled/Input';
import Button from './styled/Button';
import Container from './styled/Container';

export default ({ state, handleChange, handleClick }) => (
  <Container>
    <Box>
      <Input
        type='text'
        onChange={handleChange('title')}
        value={state.title}
        placeholder='Add title'
      />
    </Box>
    <Box>
      <Input
        type='mail'
        onChange={handleChange('description')}
        value={state.description}
        placeholder='Add description for project'
      />
    </Box>
    <Box>
      <Input
        type='text'
        onChange={handleChange('color')}
        value={state.color}
        placeholder='Add color for project'
      />
    </Box>
    <Box>
      <Input
        type='text'
        onChange={handleChange('users')}
        value={state.users}
        placeholder='Add staffs for project'
      />
    </Box>
    <Button type='button' onClick={handleClick}>Add project</Button>
  </Container>
);
