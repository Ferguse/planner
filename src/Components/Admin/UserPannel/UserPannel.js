import React from  'react';

// styles
import User from './styles/User';
import Container from './styles/Container';
import UserItem from './styles/UserItem';
import Users from './styles/Users';
import UserLine from './styles/UserLine';

const UserPannel = ({ i, item, user, handleClickUser, handleChangeUser, handleChangeUserDate, handleDeleteUser }) => (
  <Container>
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
    <Users>
      {
        item.get('workload').map((workload, index) => (
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
        ))
      }
    </Users>
  </Container>
)

export default UserPannel;
