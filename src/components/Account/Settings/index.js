import { connect } from 'react-redux';
import { compose } from 'recompose';
import createImmutableSelector from 'create-immutable-selector';

import {
  settingsNotificationSelector,
  settingsShortcutSelector,
  settingsStyleEnableSelector
} from '../../App/uiSelectors';

import {
  toggleSettingsNotification,
  toggleSettingsShortcut,
  toggleSettingsStyle
} from '../../App/uiActions';

import Settings from './Settings';

const mapStateToProps = createImmutableSelector(
  settingsNotificationSelector,
  settingsShortcutSelector,
  settingsStyleEnableSelector,
  (notification, shortcut, styleEnable) => ({
    notification,
    shortcut,
    styleEnable
  })
);

const mapDispatchToProps = {
  toggleSettingsNotification,
  toggleSettingsShortcut,
  toggleSettingsStyle
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect
);
export default enhance(Settings);
