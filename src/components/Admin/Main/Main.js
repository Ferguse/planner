import React from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './styled/Container';
import Inner from './styled/Inner';

// components
import ProjectPanel from '../ProjectPanel';
import UserPanel from '../UserPanel';

const Main = ({ project }) => (
  <Container>
    <Inner>
      <ProjectPanel project={project} />
      <UserPanel project={project} />
    </Inner>
  </Container>
);

Main.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Main;
