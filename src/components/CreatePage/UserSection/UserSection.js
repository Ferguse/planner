import React from 'react';

// styled
import Box from '../styled/Box';
import Input from '../styled/Input';
import Button from '../styled/Button';
import Form from '../styled/Form';

export default ({ target, state, handleChange, handleClick }) => (
  <Form>
    <Box>
      <label htmlFor='name'>
        Add the {`${target}
          ${(target === 'user') ? 'name' : 'title'}`}
      </label>
      <Input
        type='text'
        id='name'
        onChange={handleChange('name')}
        value={state.name}
      />
    </Box>
    <Box>
      <label htmlFor='color'>
        Add the user color
      </label>
      <Input
        type='text'
        id='color'
        onChange={handleChange('color')}
        value={state.color}
      />
    </Box>
    <Box>
      <label htmlFor='project'>
        Selected project
      </label>
      <Input
        type='text'
        id='project'
        onChange={handleChange('project')}
        value={state.project}
      />
    </Box>
    <Box>
      <label htmlFor='workload'>
        Select the workload
      </label>
      <Input
        type='text'
        id='workload'
        onChange={handleChange('workload')}
        value={state.workload}
      />
    </Box>
    <Button type='button' onClick={handleClick}>Add</Button>
  </Form>
);
