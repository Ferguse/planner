import React from  'react';
import PropTypes from 'prop-types';

// components
import UsersList from './UsersList';
import UserContent from './UserContent';

// styled
import Container from './styled/Container';
import Users from './styled/Users';
import Button from '../styled/Button';

const UserPanel = (
  { project, handleShowUserPanel }) => (
  <Container>
    <div>
      <UsersList project={project} />
      <Users>
        <UserContent />
      </Users>
    </div>
    <Button
      onClick={handleShowUserPanel}
      color='green'
    >
      EDIT PROJECTS
    </Button>
  </Container>
);

UserPanel.propTypes = {
  project: PropTypes.object.isRequired
};

export default UserPanel;
