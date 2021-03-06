import React from 'react';
import { NavLink } from 'react-router-dom';

// source
import navigation from '../../../source/navigation';

//styled
import Container from './styled/Container';
import Navigator from './styled/Navigator';
import Account from './styled/Account';

// icon
import user from '../../../assets/icons/user.jpg';

const Title = () => (
  <Container>
    <span>Planner</span>
    <nav>
      <Navigator>
        {
          navigation.map((item, i) => (
            <li key={i}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))
        }
      </Navigator>
      <Account>
        <NavLink to='/account'>
          <img src={user} alt='user'/>
        </NavLink>
      </Account>
    </nav>
  </Container>
);

export default Title;
