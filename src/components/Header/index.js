import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import { numberShowWeekSelector } from '../../Selectors/selectors';

// components
import Header from './Header';

const mapStateToProps = createImmutableSelector(
  numberShowWeekSelector
);

const withConnect = connect(
  mapStateToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Header);
