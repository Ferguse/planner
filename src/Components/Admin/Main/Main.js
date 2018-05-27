import React from 'react';

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

export default Main;
