import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import { projectsSelector, usersSelector, selectedProjectSelector } from '../App/uiSelectors';
import {
  changeDateMonth,
  selectedDay,
  selectProject,
  selectUser
} from '../App/uiActions';

import Projects from './Projects';

const mapStateToProps = createImmutableSelector(
  projectsSelector,
  usersSelector,
  selectedProjectSelector,
  (projects, users, selectedProject) => ({
    projects,
    users,
    selectedProject
  })
);

const mapDispatchToProps = {
  changeDateMonth,
  selectedDay,
  selectProject,
  selectUser
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Projects);