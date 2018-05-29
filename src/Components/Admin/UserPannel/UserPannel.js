import React from  'react';
import PropTypes from 'prop-types';

// components
import UsersList from '../UsersList';
import UserContent from '../UserContent/UserContent';

// styles
import Container from './styles/Container';
import Users from './styles/Users';

const UserPannel = (
  { i, item, user, handleClickUser, handleChangeUser, handleChangeUserDate, handleDeleteUser }) => (
  <Container>
    <UsersList
      item={item}
      handleClickUser={handleClickUser}
      user={user}
    />
    <Users>
      {
        item.get('workload').map((workload, index) => (
          <UserContent
            key={index}
            workload={workload}
            index={index}
            i={i}
            user={user}
            handleChangeUser={handleChangeUser}
            handleChangeUserDate={handleChangeUserDate}
            handleDeleteUser={handleDeleteUser}
        />
        ))
      }
    </Users>
  </Container>
);

UserPannel.propTypes = {
  i: PropTypes.number.isRequired,
  user: PropTypes.number.isRequired,
  handleChangeUser: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  handleChangeUserDate: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  handleClickUser: PropTypes.func.isRequired
};

export default UserPannel;
