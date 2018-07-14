import React from 'react';

// styled
import UserItem from './styled/UserItem';
import PropTypes from 'prop-types';

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
