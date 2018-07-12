import React from 'react';

// styled
import UserItem from './styled/UserItem';
import UserContent from '../UserContent/UserContent';
import PropTypes from 'prop-types';

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

UsersList.propTypes = {
  user: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  handleClickUser: PropTypes.func.isRequired,
};

export default UsersList;
