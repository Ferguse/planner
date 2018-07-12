

import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import { selectedProjectSelector } from '../../App/uiSelectors';
import {
  changeProject
} from '../../App/uiActions';

import Navigation from './Navigation';

const mapStateToProps = createImmutableSelector(
  selectedProjectSelector,
  selectedProject => ({
    selectedProject
  })
);

const mapDispatchToProps = {
  changeProject
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Navigation);
