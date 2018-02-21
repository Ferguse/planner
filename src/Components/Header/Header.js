import React, {Component} from 'react';
import './Header.css';
import './Weeks.css';
import Navigation from '../Navigation/Navigation'
import getDate from '../../source/getDate';
import {numberShowWeekSelector, projectSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

class Header extends Component {
  setDate = (date = new Date(), offset = 0) => {
    let ms = offset * 604800000;
    let currentDate = date.getTime() + ms;
    return getDate(currentDate)
  }

  render() {
    return (
      <header className="header">
        <Navigation/>
        <div className="weeks">
          <ul className="weeks__list">
            {
              new Array(this.props.numberShowWeek.get('num')).fill(0).map((item, i) => {
                return (
                  <li key={item + i} className="weeks__item">
                    <span className="weeks__text">{this.setDate(new Date(), i)}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </header>
    );
  }
}

const selector = createSelector(
  numberShowWeekSelector,
  (numberShowWeek) => ({
    numberShowWeek
  })
);
export default connect(selector)(Header);
