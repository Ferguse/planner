import React, { Component } from 'react';
import Project from '../Project/Project';
import Header from '../Header/Header'

//styled
import { Container } from './Projects.styled';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Header
          month={this.props.month}
          year={this.props.year}
          changeMonth={this.props.changeMonth}
        />
        <div>
          {
            this.props.projects.map(item => {
              return <Project month={this.props.month} key={item.get('id')} project={item}/>
            })
          }
        </div>
      </Container>
    );
  }
}

export default Projects;
