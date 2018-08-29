import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import UserSection from './UserSection';
import ProjectSection from './ProjectSection';

export default class CreatePage extends PureComponent {
  state = {
    name: undefined,
    color: undefined,
    project: undefined,
    workload: undefined
  };

  handleClick = target => (e) => {
    e.preventDefault();
    (target === 'user') ?
      this.props.createUser(this.state) :
      this.props.createProject(this.state);
  };

  handleChange = target => (e) => {
    e.preventDefault();
    this.setState({ [target]: e.target.value });
  };

  render() {
    const { match } = this.props;
    const { target } = match.params;

    return (
      <Container>
        <h2>
          The page for creating a new {target}
        </h2>
        {
          (target === 'user') ?
            <UserSection
              target={target}
              state={this.state}
              handleClick={this.handleClick('user')}
              handleChange={this.handleChange}
            /> :
            <ProjectSection
              target={target}
              state={this.state}
              handleClick={this.handleClick('project')}
              handleChange={this.handleChange}
            />
        }
      </Container>
    );
  }
}
