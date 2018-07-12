import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import {
  projectsSelector,
  selectedProjectSelector
} from '../../App/uiSelectors';
import {
  changeTitleProject,
  changeContentProject,
  changeColorProject,
  deleteProject
} from '../../App/uiActions';

import Project from './Project';

const mapStateToProps = createImmutableSelector(
  projectsSelector,
  selectedProjectSelector,
  (projects, selectedProject) => ({
    projects,
    selectedProject
  })
);

const mapDispatchToProps = {
  changeTitleProject,
  changeContentProject,
  changeColorProject,
  deleteProject,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Project);
