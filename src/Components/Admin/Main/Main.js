import React from 'react';
import PropTypes from 'prop-types';

// styles
import Container from './styles/Container';

// components
import Project from '../Project';
import UserPannel from '../UserPannel';

const Main = ({
                item,
                i,
                isActive,
                handleChange,
                handleDelete,
                user,
                handleChangeUser,
                handleChangeUserDate,
                handleDeleteUser,
                handleClickUser
}) => (
  <Container isActive={isActive === i}>
    <Project
      item={item}
      i={i}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
    <UserPannel
      item={item}
      user={user}
      handleClickUser={handleClickUser}
      handleChangeUser={handleChangeUser}
      handleChangeUserDate={handleChangeUserDate}
      handleDeleteUser={handleDeleteUser}
      i={i}
     />
  </Container>
);

Main.propTypes = {
  item: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  user: PropTypes.number.isRequired,
  handleChangeUser: PropTypes.func.isRequired,
  handleChangeUserDate: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  handleClickUser: PropTypes.func.isRequired
};

export default Main;
