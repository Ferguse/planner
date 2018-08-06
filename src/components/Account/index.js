import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

import {
  selectedAccountActivePageSelector
} from '../App/uiSelectors';

import {
  changeAccountPage
} from '../App/uiActions';

import Account from './Account';

const mapStateToProps = createImmutableSelector(
  selectedAccountActivePageSelector,
  (accountActivePage) => ({
    accountActivePage
  })
);

const mapDispatchToProps = {
  changeAccountPage
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Account);
