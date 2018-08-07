import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import Box from './styled/Box';
import Icon from './styled/Icon';
import Text from './styled/Text';
import Checkbox from './styled/Checkbox';

// icon
import icon from '../../../assets/icons/trash.png';

class Settings extends PureComponent {
  toggleNotification = (e) => {
    e.preventDefault();
    this.props.toggleSettingsNotification(!this.props.notification);
  };

  toggleShortcut = (e) => {
    e.preventDefault();
    this.props.toggleSettingsShortcut(!this.props.shortcut);
  };

  toggleStyleEnable = (e) => {
    e.preventDefault();
    this.props.toggleSettingsStyle(!this.props.styleEnable);
  };

  render() {
    return (
      <Container>
        <Box>
          <Icon>
            <img src={icon} alt=""/>
          </Icon>
          <Text>
            <p>
              Notification
            </p>
            <p>
             Enable, disable notification for your mail
            </p>
          </Text>
          <Checkbox>
            <input
              id='checkbox1'
              type='checkbox'
              checked={this.props.notification}
            />
            <label htmlFor='checkbox1' onClick={this.toggleNotification} />
          </Checkbox>
        </Box>
        <Box>
          <Icon>
            <img src={icon} alt='icon'/>
          </Icon>
          <Text>
            <p>
              Shortcut
            </p>
            <p>
              Enable, disable shortcut
            </p>
          </Text>
          <Checkbox>
            <input
              id='checkbox2'
              type='checkbox'
              checked={this.props.shortcut}
            />
            <label
              htmlFor='checkbox2' onClick={this.toggleShortcut} />
          </Checkbox>
        </Box>
        <Box>
          <Icon>
            <img src={icon} alt='icon'/>
          </Icon>
          <Text>
            <p>
              Window Style
            </p>
            <p>
              Change the color scheme
            </p>
          </Text>
          <Checkbox>
            <input
              id='checkbox3'
              type='checkbox'
              checked={this.props.styleEnable}
            />
            <label htmlFor='checkbox3' onClick={this.toggleStyleEnable} />
          </Checkbox>
        </Box>
      </Container>
    )
  }
};

export default Settings;
