import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import Button from './styled/Button';
import Logo from './styled/Logo';

// icon
import icon from '../../../assets/icons/trash.png';

class About extends PureComponent {
  render() {
    return (
      <Container>
        <Logo>
          <img src={icon} alt='logo' />
          <p>Version 0.1.0</p>
        </Logo>
        <p>
          This planner lets your work more collaboratively and get more done.
          I love hearing from users, and I hope you will be my
          friend on the internet.
        </p>
        <Button href='https://github.com/Ferguse/planner'>
          Rate me in Github
        </Button>
      </Container>
    );
  }
}

export default About;
