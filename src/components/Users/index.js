import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import { projectsSelector } from '../App/uiSelectors';
import {
  changeDateMonth,
  selectedDay,
  selectProject,
  selectUser
} from '../App/uiActions';

import Users from './Users';

const mapStateToProps = createImmutableSelector(
  projectsSelector,
  projects => ({
    projects
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
export default enhance(Users);