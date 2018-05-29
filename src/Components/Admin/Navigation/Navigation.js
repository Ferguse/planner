import React from 'react';
import PropTypes from 'prop-types';

// styles
import Container from './styles/Container';
import Title from './styles/Title';

const Navigation = ({ handleClick, isActive, projects }) => (
  <Container>
    {
      projects.map((item, i) => (
        <Title
          onClick={handleClick.bind(null, i)}
          isActive={isActive === i}
          key={i}
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
  isActive: PropTypes.bool.isRequired,
  projects: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Navigation;
