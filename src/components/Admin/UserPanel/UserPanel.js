import React from  'react';
import PropTypes from 'prop-types';

// components
import UsersList from './UsersList';
import UserContent from './UserContent';

// styled
import Container from './styled/Container';
import Users from './styled/Users';

const UserPanel = (
  { project }) => (
  <Container>
    <UsersList project={project} />
    <Users>
      <UserContent />
    </Users>
  </Container>
);

UserPanel.propTypes = {
  project: PropTypes.object.isRequired
};

export default UserPanel;
