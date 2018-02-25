import React, {Component} from 'react';
import Project from '../Project/Project';
import {numberShowWeekSelector, projectSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

//styled
import { Container } from './Projects.styled';

class Projects extends Component {
  render() {
    return (
      <Container>
        <div>
          {
            this.props.projects.map(item => {
              return <Project key={item.id} project={item}/>
            })
          }
        </div>
      </Container>
    );
  }
}

const selector = createSelector(
  projectSelector,
  (projects) => ({
    projects
  })
);
export default connect(selector)(Projects);
