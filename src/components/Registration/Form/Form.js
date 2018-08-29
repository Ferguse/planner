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
        onChange={handleChange('name')}
        value={state.name}
        placeholder='Add your name'
      />
    </Box>
    <Box>
      <Input
        type='mail'
        onChange={handleChange('mail')}
        value={state.mail}
        placeholder='Add your mail'
      />
    </Box>
    <Box>
      <Input
        type='text'
        onChange={handleChange('login')}
        value={state.login}
        placeholder='Add your login'
      />
    </Box>
    <Box>
      <Input
        type='password'
        onChange={handleChange('password')}
        value={state.password}
        placeholder='Add password'
      />
    </Box>
    <Box>
      <Input
        type='password'
        onChange={handleChange('passwordConfirm')}
        value={state.passwordConfirm}
        placeholder='Confirm your password'
      />
    </Box>
    <Box>
      <input
        type='checkbox'
        checked={state.notification}
        onChange={handleChange('passwordConfirm')}
      />
      <label>
        Enable notification
      </label>
    </Box>
    <Button type='button' onClick={handleClick}>Registration</Button>
  </Container>
);
