import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import {
  projectsSelector,
  usersSelector,
  selectedProjectSelector,
  modalProjectSelector
} from '../App/uiSelectors';
import {
  changeDateMonth,
  selectedDay,
  selectProject,
  selectUser,
  showModalProject,
  closeModalProject
} from '../App/uiActions';

import Projects from './Projects';

const mapStateToProps = createImmutableSelector(
  projectsSelector,
  usersSelector,
  selectedProjectSelector,
  modalProjectSelector,
  (projects, users, selectedProject, modalProject) => ({
    projects,
    users,
    selectedProject,
    modalProject
  })
);

const mapDispatchToProps = {
  changeDateMonth,
  selectedDay,
  selectProject,
  selectUser,
  showModalProject,
  closeModalProject
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Projects);
