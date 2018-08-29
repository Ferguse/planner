import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import Form from './Form';

export default class Create extends PureComponent {
  state = {
    title: undefined,
    color: undefined,
    descrption: undefined,
    staffs: []
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
  };

  handleChange = target => (e) => {
    e.preventDefault();
    this.setState({ [target]: e.target.value });
  };

  render() {
    return (
      <Container>
        <h2>
          New project:
        </h2>
        <Form
          state={this.state}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </Container>
    );
  }
}
