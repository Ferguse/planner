import React from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './styled/Container';

// components
import ProjectPanel from '../ProjectPanel';
import UserPanel from '../UserPanel';

const Main = ({ project }) => (
  <Container>
    <ProjectPanel project={project} />
    <UserPanel project={project} />
  </Container>
);

Main.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Main;
