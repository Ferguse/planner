import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import {
  projectsSelector,
  usersSelector,
  selectedProjectSelector,
  modalProjectSelector
} from '../App/entitiesSelectors';
import {
  changeDateMonth,
  selectedDay,
  selectProject,
  selectUser,
  showModalProject,
  closeModalProject
} from '../App/uiActions';

import {
  fetchUsers,
  fetchProjects,
  fetchStaffs,
  fetchUser,
  fetchStaff
} from '../App/entitiesActions';


import Projects from './Projects';

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchProjects();
    this.props.fetchStaffs();
    this.props.fetchUser();
    this.props.fetchStaff();
  }
});


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
  closeModalProject,
  fetchUsers,
  fetchProjects,
  fetchStaffs,
  fetchUser,
  fetchStaff
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect,
  withLifecycle
);
export default enhance(Projects);
