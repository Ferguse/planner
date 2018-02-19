import React, {Component} from 'react';
import './Info.css';
import Calendar from '../Calendar/Calendar'

class Info extends Component {
  getPercent = (arr) => {
    let result = arr.filter(i => {
      return i.user === this.props.user.name;
    })[0]
    return (result) ? result.percent + '%' : '-';
  }

  render() {
    return (
      <div className="box">
        <div className="box__content">
          <div className="box__percent">
            <span className="box__text">{this.getPercent(this.props.project.workload)}</span></div>
          <div className="box__info">
            <span className="users__text">{this.props.title}</span>
          </div>
        </div>
        <Calendar project={this.props.project} user={this.props.user}/>
      </div>
    );
  }
}

export default Info;
