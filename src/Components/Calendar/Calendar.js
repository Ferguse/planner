import React, {Component} from 'react';
import './Calendar.css';
import getNumWeek from '../../source/getNumWeek';
import {projectSelector, numberShowWeekSelector} from '../../Selectors/selectors';
import {createSelector} from "reselect";
import {connect} from 'react-redux';


class Calendar extends Component {
  filterProps = () => {
    return this.props.projects
      .filter(i => {
        return i.id === this.props.project.id;
      })[0].workload
      .filter(i => {
        return i.user === this.props.user.name;
      })[0];
  }
  getBackground = (num) => {
    if (this.filterProps() && this.filterProps().weeks[0] == num) {
      if (this.props.project.title === 'Отпуск') {
        return '#d8d8d8';
      } else {
        return this.props.user.color;
      }
    } else {
      return 'white';
    }
  }

  getLength = () => {
    return (this.filterProps()) ? this.filterProps().weeks.length - 1 : 0;
  }

  getColor = (num) => {

    let weeks = (this.filterProps()) ? this.filterProps().weeks : [];
    let result = weeks.filter(i => {
      return parseInt(i) === num;
    })
    console.log(this.filterProps() && this.filterProps().weeks, num);
    return {
      'background': this.getBackground(num),
      'opacity': (result.length > 0) ? (parseInt(this.filterProps().percent) / 100) : 0,
    }
  }

  getStyle = (num) => {
    return {
      'width': (this.filterProps() && this.filterProps().weeks[0] === num) ? (this.getLength() + 1) * 25 + '%' : 25 + '%'
    }
  }
  setClassName = (num) => {
    if (this.filterProps() && this.filterProps().weeks[0] === num) {
      if (this.props.project.title === 'Отпуск') {
        return 'calendar__date';
      } else {
        return 'calendar__date work-block';
      }
    } else {
      return 'calendar__date';
    }
  }

  render() {
    return (
      <div className="calendar">
        {
          new Array(this.props.numberShowWeek.num - this.getLength()).fill(0).map((item, i) => {
            return (
              <div key={item + i} className={this.setClassName(getNumWeek(new Date(), i))}
                   style={this.getStyle(getNumWeek(new Date(), i))}>
                <div className="calendar__inner" style={this.getColor(getNumWeek(new Date(), i))}></div>
                <i style={{background: this.getBackground(getNumWeek(new Date(), i))}}></i>
                <i style={{background: this.getBackground(getNumWeek(new Date(), i))}}></i>
              </div>
            )
          })
        }
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
export default connect(selector)(Calendar);
