import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import Form from './Form';
import Title from './styled/Title';

export default class Registration extends PureComponent {
  state = {
    name: undefined,
    mail: undefined,
    login: undefined,
    password: undefined,
    notification: true
  };

  handleClick = () => this.props.createUser(this.state);

  handleChange = target => (e) => {
    e.preventDefault();
    this.setState({ [target]: e.target.value });
  };

  render() {
    const { match } = this.props;
    const { target } = match.params;

    return (
      <Container>
        <Title>
          Welcome to Planner. Please sign up.
        </Title>
        <Form
          target={target}
          state={this.state}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </Container>
    );
  }
}
