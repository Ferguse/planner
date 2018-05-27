import React from 'react';

// styles
import UserItem from './styles/UserItem';

const UsersList = ({ item, handleClickUser, user }) => (
  <div>
    {
      item.get('workload').map((i, index) =>
        <UserItem
          onClick={handleClickUser.bind(null, index)}
          user={user === index}
          key={i}
        >
          <span>{i.get('user')}</span>
        </UserItem>
      )
    }
  </div>
);

export default UsersList;
