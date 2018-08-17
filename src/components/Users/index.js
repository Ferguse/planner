import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import {
  projectsSelector,
  usersSelector
} from '../App/entitiesSelectors';
import {
  changeDateMonth,
  selectedDay,
  selectProject,
  selectUser
} from '../App/uiActions';

import Users from './Users';

import {
  fetchUsers,
  fetchProjects,
  fetchStaffs,
  fetchUser,
  fetchStaff
} from '../App/entitiesActions';

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchProjects();
    this.props.fetchStaffs();
    this.props.fetchUser();
    this.props.fetchStaff();
  }
})

const mapStateToProps = createImmutableSelector(
  projectsSelector,
  usersSelector,
  (projects, users) => ({
    projects,
    users
  })
);

const mapDispatchToProps = {
  changeDateMonth,
  selectedDay,
  selectProject,
  selectUser,
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
export default enhance(Users);
