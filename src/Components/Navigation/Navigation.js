import React from 'react';
import {NavLink} from 'react-router-dom';

//styled
import Container from './Navigation.styled'

const Title = (props) => (
  <Container>
    <span>Planner</span>
    <nav>
      <ul>
        <li>
          <div><NavLink to="/admin">Admin</NavLink></div>
        </li>
        <li>
          <div><NavLink to="/projects">Projects</NavLink></div>
        </li>
        <li>
          <div><NavLink to="/users">Staffs</NavLink></div>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Title;