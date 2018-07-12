import React from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './styled/Container';
import Title from './styled/Title';
import {changeProject} from "../../App/uiActions";

const Navigation = ({ changeProject, selectedProject, projects }) => (
  <Container>
    {
      projects.map((item, i) => (
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
  </Container>
)

Navigation.propTypes = {
  selectedProject: PropTypes.number.isRequired,
  projects: PropTypes.object.isRequired,
  changeProject: PropTypes.func.isRequired
};

export default Navigation;
