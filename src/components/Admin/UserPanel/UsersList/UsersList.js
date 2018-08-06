import React from 'react';
import PropTypes from 'prop-types';

// styled
import UserItem from './styled/UserItem';

const UsersList = ({ project, selectedUser, users, changeUser }) => (
  <div>
    {
      project.get('users').map(user => (
        <UserItem
          onClick={() => changeUser(user)}
          user={user === selectedUser}
          key={user}
        >
          <span>
            {
              users.getIn([user, 'name'])
            }
          </span>
        </UserItem>
      ))
    }
  </div>
);

UsersList.propTypes = {
  selectedUser: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

export default UsersList;
