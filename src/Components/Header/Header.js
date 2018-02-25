import React, {Component} from 'react';
import getDate from '../../source/getDate';
import {numberShowWeekSelector, projectSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

// styled
import { HeaderStyle, Weeks } from './Header.styled'

class Header extends Component {
  setDate = (date = new Date(), offset = 0) => {
    let ms = offset * 604800000;
    let currentDate = date.getTime() + ms;
    return getDate(currentDate)
  }

  render() {
    return (
      <HeaderStyle>
        <Weeks>
          <ul>
            {
              new Array(this.props.numberShowWeek.get('num')).fill(0).map((item, i) => {
                return (
                  <li key={item + i}>
                    <span>{this.setDate(new Date(), i)}</span>
                  </li>
                )
              })
            }
          </ul>
        </Weeks>
      </HeaderStyle>
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
