import React from 'react';

// styles
import Container from './styles/Container';
import Title from './styles/Title';

export default ({ handleClick, isActive, projects }) => (
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
