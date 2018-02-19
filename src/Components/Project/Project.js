import React, {Component} from 'react';
import Info from '../Info/Info';
import getNumWeek from '../../source/getNumWeek';
import './Project.css';
import {numberShowWeekSelector, projectSelector, userSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

class Project extends Component {
  getColor = (num) => {
    let opacity = 10;
    this.props.users.forEach(item => {

      var result = this.props.project.workload
        .filter(i => {
          return i.user === item.name
        })
        .filter(i => {

          return (i.weeks) ? i.weeks.includes(num) : false
        })
      if (result.length > 0) opacity += result[0].percent;
    })

    return {
      'background': this.props.project.color,
      'opacity': opacity / 100
    }
  }

  render() {
    return (
      <div className="block">
        <div className="users">
          <div className="users__header">
            <div className="users__name">
              <p style={{background: this.props.project.color}}
                 className="users__text users__title">{this.props.project.title}</p>
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
              this.props.users
                .map(item => {
                  return <Info key={item.id} project={this.props.project} user={item} title={item.name}/>
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
  userSelector,
  numberShowWeekSelector,
  (projects, users, numberShowWeek) => ({
    projects,
    users,
    numberShowWeek
  })
);
export default connect(selector)(Project);
