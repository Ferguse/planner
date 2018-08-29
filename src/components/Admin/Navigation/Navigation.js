import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// styled
import Container from './styled/Container';
import Title from './styled/Title';
import Button from './styled/Button';

const Navigation = ({ changeProject, selectedProject, projects, isShowUser }) => (
  <Container>
    {
      projects.toList().map((item, i) => (
        <Title
          onClick={() => changeProject(item.get('id'))}
          isActive={selectedProject === item.get('id')}
          key={item.get('id')}
        >
          <button type='button'>
            <span>
              {item.get('title')}
            </span>
          </button>
        </Title>
      ))
    }
    <NavLink to={`/create/${(isShowUser) ? 'user' : 'project'}`} >
      <Button>+</Button>
    </NavLink>
  </Container>
);

Navigation.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  projects: PropTypes.object.isRequired,
  changeProject: PropTypes.func.isRequired,
  isShowUser: PropTypes.bool.isRequired
};

export default Navigation;
