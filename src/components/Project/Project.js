import React, { Component } from 'react';
import { createSelector } from "reselect";
import { connect } from "react-redux";

// styled
import Info from '../Info/Info';
import Header from './styled/Header';
import Name from './styled/Name';
import Data from './styled/Data';

// selectors
import { numberShowWeekSelector, projectSelector, userSelector } from "../../Selectors/selectors";


class Project extends Component {
  getColor = (num) => {
    let opacity = 10;
    this.props.users.forEach(item => {

      var result = this.props.project.get('workload')
        .filter(i => {
          return i.get('user') === item.get('name')
        })
        .filter(i => {

          return (i.get('weeks')) ? i.get('weeks').includes(num) : false
        })
      if (result.length > 0) opacity += result[0].percent;
    })

    return {
      'background': this.props.project.get('color'),
      'opacity': opacity / 100
    }
  }

  render() {
    return (
      <div>
        <Header>
          <Name>
            <p
              style={{background: this.props.project.get('color')}}
            >
              {this.props.project.get('title')}
            </p>
          </Name>
        </Header>
        <Data>
          {
            this.props.project.get('workload')
              .map((item, i) => (
                <Info
                  month={this.props.month}
                  key={i} project={item}
                  user={item.get('user')}
                  title={this.props.project.get('title')}
                />
              ))
          }
        </Data>
      </div>
    );
  }
}

const selector = createSelector(
  projectSelector,
  userSelector,
  numberShowWeekSelector,
  (projects, users, numberShowWeek) => ({
    projects,
    users,
    numberShowWeek
  })
);
export default connect(selector)(Project);
