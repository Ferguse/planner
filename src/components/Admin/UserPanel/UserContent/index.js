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
  changeUserName,
  changeUserPercent,
  changeUserStartWork,
  changeUserEndWork,
  deleteUser
} from '../../../App/uiActions';

import UserContent from './UserContent';

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
  changeUserName,
  changeUserPercent,
  changeUserStartWork,
  changeUserEndWork,
  deleteUser
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);

export default enhance(UserContent);
