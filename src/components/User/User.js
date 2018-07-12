import React, { Component } from 'react';
import { createSelector } from "reselect";

// styled
import Info from '../InfoUser/Info';


// components
import Header from './styled/Header';
import Name from './styled/Name';
import Data from './styled/Data';

class User extends Component {
  getColor = (num) => {
    let value = 0;
    var background;
    this.props.projects
      .filter(item => {
        let result = item.get('workload').filter(i => {
          return i.user === this.props.user.name
        })
        return (result.length > 0) ? true : false;
      })
      .filter(item => {
        let result = item.workload.filter(i => {
          return i.weeks.includes(num)
        })
        return (result.length > 0) ? true : false;
      })
      .filter(item => {
        background = (item.title === 'Отпуск') ? '#d8d8d8' : this.props.user.color;
        return false;
      })

    this.props.projects.forEach(item => {
      var result = item.get('workload')
        .filter(i => {
          return i.user === this.props.user.name
        })
        .filter(i => {
          return i.get('weeks').includes(num)
        });
      if (result.length > 0) value += result[0].percent;
    });
    let opacity = value / 100;

    return {background, opacity}
  }

  render() {
    return (
      <div>
        <Header>
          <Name>
            <p>{this.props.user}</p>
          </Name>
        </Header>
        <Data>
          {
            this.props.projects
              .map(item => (
                <Info
                  month={this.props.month}
                  key={item.id}
                  project={item}
                  user={this.props.user}
                  title={item.get('title')}/>
              ))
          }
        </Data>
      </div>
    );
  }
}

export default User;
