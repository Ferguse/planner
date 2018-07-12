import React from 'react';
import { NavLink } from 'react-router-dom';

// source
import navigation from '../../source/navigation';

//styled
import Container from './styled/Container';
import Navigator from './styled/Navigator';

const Title = () => (
  <Container>
    <span>Planner</span>
    <nav>
      <Navigator>
        {
          navigation.map(item => (
            <li>
              <div><NavLink to={item.link}>{item.title}</NavLink></div>
            </li>
          ))
        }
      </Navigator>
    </nav>
  </Container>
);

export default Title;