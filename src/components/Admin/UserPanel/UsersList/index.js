import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import {
  projectsSelector,
  selectedProjectSelector,
  selectedUserSelector,
  usersSelector
} from '../../../App/uiSelectors';
import {
  changeTitleProject,
  changeContentProject,
  changeColorProject,
  deleteProject,
  changeUserName,
  changeUserPercent,
  changeUserStartWork,
  changeUserEndWork,
  deleteUser,
  changeUser
} from '../../../App/uiActions';

import UsersList from './UsersList';

const mapStateToProps = createImmutableSelector(
  projectsSelector,
  selectedProjectSelector,
  selectedUserSelector,
  usersSelector,
  (projects, selectedProject, selectedUser, users) => ({
    projects,
    selectedProject,
    selectedUser,
    users
  })
);

const mapDispatchToProps = {
  changeTitleProject,
  changeContentProject,
  changeColorProject,
  deleteProject,
  changeUserName,
  changeUserPercent,
  changeUserStartWork,
  changeUserEndWork,
  deleteUser,
  changeUser
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(UsersList);
