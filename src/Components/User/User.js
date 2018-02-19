import React, {Component} from 'react';
import Info from '../Info/Info';
import getNumWeek from '../../source/getNumWeek';
import './User.css';
import {numberShowWeekSelector, projectSelector, userSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

class User extends Component {
  getColor = (num) => {
    let value = 0;
    var background;
    this.props.projects
      .filter(item => {
        let result = item.workload.filter(i => {
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
      var result = item.workload
        .filter(i => {
          return i.user === this.props.user.name
        })
        .filter(i => {
          return i.weeks.includes(num)
        });
      if (result.length > 0) value += result[0].percent;
    });
    let opacity = value / 100;

    return {background, opacity}
  }

  render() {
    return (
      <div className="block">
        <div className="users">
          <div className="users__header">
            <div className="users__name">
              <p className="users__text users__title"
                 style={{background: this.props.user.color}}>{this.props.user.name}</p>
            </div>
            <div className="box__calendar">
              {
                new Array(this.props.numberShowWeek.num).fill(0).map((item, i) => {
                  return (
                    <div key={item + i} className="box__date" style={this.getColor(getNumWeek(new Date(), i))}></div>
                  )
                })
              }
            </div>
          </div>
          <div className="users__data">
            {
              this.props.projects
                .filter(item => {
                  return item.users.includes(this.props.user.name);
                })
                .map(item => {
                  return <Info key={item.id} project={item} user={this.props.user} title={item.title}/>
                })
            }
          </div>
        </div>
      </div>
    );
  }
}

const selector = createSelector(
  projectSelector,
  numberShowWeekSelector,
  (projects, numberShowWeek) => ({
    projects,
    numberShowWeek
  })
);
export default connect(selector)(User);
