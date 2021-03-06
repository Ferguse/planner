import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import {
  projectsSelector,
  selectedProjectSelector,
  selectedUserSelector
} from '../App/uiSelectors';
import {
  changeTitleProject,
  changeContentProject,
  changeColorProject,
  deleteProject,
  changeUserName,
  changeUserPercent,
  changeUserStartWork,
  changeUserEndWork,
  deleteUser
} from '../App/uiActions';

import Admin from './Admin';

const mapStateToProps = createImmutableSelector(
  projectsSelector,
  selectedProjectSelector,
  selectedUserSelector,
  (projects, selectedProject, selectedUser) => ({
    projects,
    selectedProject,
    selectedUser
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
  deleteUser
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Admin);
