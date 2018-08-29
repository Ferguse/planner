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
  createUser,
  createProject
} from '../App/entitiesActions';

import CreatePage from './CreatePage';

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
  createUser,
  createProject
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(CreatePage);
