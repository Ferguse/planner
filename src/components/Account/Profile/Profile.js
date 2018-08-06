import React, { PureComponent } from 'react';

// styled
import Container from './styled/Container';
import Top from './styled/Top';
import Image from './styled/Image';
import UserData from './styled/UserData';
import Box from './styled/Box';

// icons
import edit from '../../../assets/icons/edit.svg'

// utils
import validation from '../../../source/validation';

class Profile extends PureComponent {
  state = {
    editableContent: null
  };

  inputRef = React.createRef();

  toggleEditableBox = value => () => {
    this.setState({ editableContent: value });
  };

  handleClickChangeAvatar = () => {
    this.props.changeUserAvatar(this.props.user._id);
  };

  handleChangeName = e => {
    this.props.handleChangeUserName(e.target.value);
    this.setState({ editableContent: null });
  };

  handleChangeSurname = e => {
    this.props.handleChangeUserName(e.target.value);
    this.setState({ editableContent: null });
  };

  handleChangeMail = e => {
    this.props.handleChangeUserMail(e.target.value);
    this.setState({ editableContent: null });
  };

  handleChangeLogin = e => {
    this.props.handleChangeUserLogin(e.target.value);
    this.setState({ editableContent: null });
  };

  handleChangePassword = e => {
    const targetValue = e.target.value;
    const firstInputValue = this.ref.target.value;

    if (targetValue === firstInputValue) {
      this.props.handleChangeUserPassword(e.target.value);
      this.setState({ editableContent: null });
    }

    if (targetValue !== firstInputValue) {
      this.setState({ error: 'Not same passwords' })
    }
    if (targetValue.length < 5) {
      this.setState({ error: 'Too short password' })
    }
    if (!validation(targetValue)) {
      this.setState({ error: 'Not correct password' })
    }
  };

  render() {
    if (!this.props.user) return null;
    const { user } = this.props;

    return (
      <Container>
        <Top>
          <Image>
            <label htmlFor='file_input'>
              <img src={user.get('image')} alt='avatar'/>
              <span>
                {(user.get('image')) ? 'Change' : 'Load'} avatar
              </span>
            </label>
            <input
              id='file_input'
              type='file'
              onClick={this.handleClickChangeAvatar}
            />
          </Image>
          <UserData>
            <Box isEditable={this.state.editableContent === 'name'}>
              <p onDoubleClick={this.toggleEditableBox('name')}>
                {user.get('name')}
                </p>
              <input
                type='text'
                defaultValue={user.get('name')}
                onBlur={this.handleChangeName}
              />
              <button onClick={this.toggleEditableBox('name')} >
                <img src={edit} alt='edit icon'/>
              </button>
            </Box>
            <Box isEditable={this.state.editableContent === 'surname'}>
              <p onDoubleClick={this.toggleEditableBox('surname')}>
                {user.get('surname')}
                </p>
              <input
                type='text'
                defaultValue={user.get('surname')}
                onBlur={this.handleChangeSurname}
              />
              <button onClick={this.toggleEditableBox('surname')} >
                <img src={edit} alt='edit icon'/>
              </button>
            </Box>
            <Box isEditable={this.state.editableContent === 'mail'}>
              <p onDoubleClick={this.toggleEditableBox('mail')}>
                {user.get('mail')}
              </p>
              <input
                type='text'
                defaultValue={user.get('mail')}
                onBlur={this.handleChangeMail}
              />
              <button onClick={this.toggleEditableBox('mail')} >
                <img src={edit} alt='edit icon'/>
              </button>
            </Box>
            <Box isEditable={this.state.editableContent === 'login'}>
              <p onDoubleClick={this.toggleEditableBox('login')}>
                {user.get('login')}
              </p>
              <input
                type='text'
                defaultValue={user.get('login')}
                onBlur={this.handleChangeLogin}
              />
              <button onClick={this.toggleEditableBox('login')} >
                <img src={edit} alt='edit icon'/>
              </button>
            </Box>
            <Box isEditable={this.state.editableContent === 'password'}>
              <p onDoubleClick={this.toggleEditableBox('password')}>
                {Array(user.get('password').length).fill('*')}
              </p>
              <input
                type='password'
                ref={this.inputRef}
                defaultValue={user.get('password')}
              />
              <input
                type='password'
                defaultValue={user.get('password')}
                onBlur={this.props.handleChangePassword}
              />
              <button onClick={this.toggleEditableBox('password')} >
                <img src={edit} alt='edit icon'/>
              </button>
            </Box>
          </UserData>
        </Top>
      </Container>
    )
  }
};

export default Profile;
