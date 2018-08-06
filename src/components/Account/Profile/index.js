import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

// eslint-disable-next-line max-len
import { selectedCurrentUserSelector } from '../../App/uiSelectors';
import {
  changeCurrentUserName,
  changeCurrentUserSurname,
  changeCurrentUserLogin,
  changeCurrentUserPassword,
  changeCurrentUserMail,
  changeCurrentUserAvatar
} from '../../App/uiActions';

import Profile from './Profile';

const mapStateToProps = createImmutableSelector(
  selectedCurrentUserSelector,
  user => ({
    user
  })
);

const mapDispatchToProps = {
  handleChangeUserName: changeCurrentUserName,
  handleChangeUserSurname: changeCurrentUserSurname,
  handleChangeUserMail: changeCurrentUserMail,
  handleChangeUserLogin: changeCurrentUserLogin,
  handleChangeUserPassword: changeCurrentUserPassword,
  changeUserAvatar: changeCurrentUserAvatar
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Profile);
