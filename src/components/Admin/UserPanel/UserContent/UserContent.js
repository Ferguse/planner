import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styled
import User from './styled/User';
import UserLine from './styled/UserLine';
import Delete from '../../styled/Delete';

// icon
import trash from '../../../../assets/icons/trash.png';

class UserContent extends PureComponent {
  changeUserNameHandle = e =>
    this.props.changeUserName(e.target.value);

  changeUserPercentHandle = e =>
    this.props.changeUserPercent(e.target.value);

  changeUserStartWorkHandle = e =>
    this.props.changeUserStartWork(e.target.value);

  changeUserEndWorkHandle = e =>
    this.props.changeUserEndWork(e.target.value);

  deleteUserHandle = e =>
    this.props.deleteUser();

  render() {
    const { users,
      selectedUser,
      selectedProject } = this.props;
    return (
      <User>
        <UserLine>
          <label htmlFor="user">User</label>
          <input
            title='user'
            type='text'
            value={users.getIn([selectedUser, 'name'])}
            onChange={this.changeUserNameHandle}
          />
        </UserLine>
        <UserLine>
          <label htmlFor="percent">Percent</label>
          <input
            title='percent'
            type='text'
            value={users.getIn([selectedUser, 'workload', selectedProject, 'percent'])}
            onChange={this.changeUserPercentHandle}
          />
        </UserLine>
        <UserLine>
          <label htmlFor="start">Project start</label>
          <input
            title='start'
            type="date"
            value={
              users.getIn([selectedUser, 'workload', selectedProject, 'dates', 0, 'start'])
            }
            onChange={this.changeUserStartWorkHandle}
            stage='start'
          />
        </UserLine>
        <UserLine>
          <label htmlFor="end">Project end</label>
          <input
            title='end'
            type="date"
            value={
              users.getIn([selectedUser, 'workload', selectedProject.toString(), 'dates', 0, 'end'])
            }
            onChange={this.changeUserEndWorkHandle}
          />
        </UserLine>
        <Delete
          onClick={this.deleteUserHandle}
          type='button'
          color='darkred'
        >
          <img src={trash} alt='trash' />
        </Delete>
      </User>
    )
  }
};

UserContent.propTypes = {
  users: PropTypes.object.isRequired,
  selectedUser: PropTypes.string.isRequired,
  selectedProject: PropTypes.string.isRequired
};

export default UserContent;
