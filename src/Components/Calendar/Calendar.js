import React, {Component} from 'react';
import './Calendar.css';
import getNumWeek from '../../source/getNumWeek';
import {projectSelector, numberShowWeekSelector} from '../../Selectors/selectors';
import {createSelector} from "reselect";
import {connect} from 'react-redux';

// styled
import { Container, Calendar } from './Calendar.styled';


class CalendarComponent extends Component {
  filterProps = () => {
    return this.props.projects
      .find(i => {
        return i.get('id') === this.props.project.get('id');
      }).get('workload')
      .find(i => {
        return i.get('user') === this.props.user.get('name');
      });
  }
  getBackground = (num) => {
    if (this.filterProps() && this.filterProps().get('weeks').first() == num) {
      if (this.props.project.get('title') === 'Отпуск') {
        return '#d8d8d8';
      } else {
        return this.props.user.get('color');
      }
    } else {
      return 'white';
    }
  }

  getLength = () => {
    return (this.filterProps()) ? this.filterProps().get('weeks').size - 1 : 0;
  }

  getColor = (num) => {
    let weeks = (this.filterProps()) ? this.filterProps().get('weeks') : [];
    let result = weeks.filter(i => {
      return parseInt(i) === num;
    })
    return {
      'background': this.getBackground(num),
      'opacity': (result.size > 0) ? (parseInt(this.filterProps().get('percent')) / 100) : 0,
    }
  }

  getStyle = (num) => {
    return {
      'width': (this.filterProps() && this.filterProps().get('weeks').first() === num) ? (this.getLength() + 1) * 25 + '%' : 25 + '%'
    }
  }
  setClassName = (num) => {
    if (this.filterProps() && this.filterProps().get('weeks').first() === num) {
      if (this.props.project.get('title') === 'Отпуск') {
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
      <Container>
        {
          new Array(this.props.numberShowWeek.get('num') - this.getLength()).fill(0).map((item, i) => {
            return (

              <Calendar
                key={item + i}
                className={this.setClassName(getNumWeek(new Date(), i))}
                // style={this.getStyle(getNumWeek(new Date(), i))}
              >
                <div style={this.getColor(getNumWeek(new Date(), i))}></div>
                <i style={{background: this.getBackground(getNumWeek(new Date(), i))}}></i>
                <i style={{background: this.getBackground(getNumWeek(new Date(), i))}}></i>
              </Calendar>
            )
          })
        }
      </Container>
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
export default connect(selector)(CalendarComponent);
