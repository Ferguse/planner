import React from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './styled/Container';
import Title from './styled/Title';

const Navigation = ({ handleClick, isActive, projects }) => (
  <Container>
    {
      projects.map((item, i) => (
        <Title
          onClick={handleClick.bind(null, i)}
          isActive={isActive === i}
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
  isActive: PropTypes.number.isRequired,
  projects: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Navigation;
