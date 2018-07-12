import React from 'react';
import PropTypes from 'prop-types';

// styled
import User from './styled/User';
import UserLine from './styled/UserLine';

const UserContent = ({ i, user, handleChangeUser, workload, index, handleChangeUserDate, handleDeleteUser }) => (
  <User
    key={index}
    user={user === index}
  >
    <UserLine>
      <label htmlFor="user">User</label>
      <input
        onChange={handleChangeUser}
        title='user'
        index={i}
        type='text'
        value={workload.get('user')}
        username={workload.get('user')}
        userindex={index}
      />
    </UserLine>
    <UserLine>
      <label htmlFor="percent">Percent</label>
      <input
        onChange={handleChangeUser}
        title='percent'
        index={i}
        type='text'
        value={workload.get('percent')}
        username={workload.get('user')}
        userindex={index}
      />
    </UserLine>
    {
      workload.get('dates').map((date, it) => (
        <div key={it}>
          <UserLine>
            <label htmlFor="start">Project start</label>
            <input
              onChange={this.handleChangeUserDate}
              title='start'
              index={i}
              type="date"
              value={date.get('start')}
              username={workload.get('user')}
              stage='start'
              userindex={index}
            />
          </UserLine>
          <UserLine>
            <label htmlFor="end">Project end</label>
            <input
              onChange={handleChangeUserDate}
              title='end'
              index={i}
              type="date"
              value={date.get('end')}
              username={workload.get('user')}
              stage='end'
              userindex={index}
            />
          </UserLine>
        </div>
      ))
    }
    <button type='button' onClick={handleDeleteUser.bind(null, index)}> Delete user</button>
  </User>
);

UserContent.propTypes = {
  i: PropTypes.number.isRequired,
  user: PropTypes.number.isRequired,
  handleChangeUser: PropTypes.func.isRequired,
  workload: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleChangeUserDate: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired
};

export default UserContent;
