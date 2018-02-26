import React, {Component} from 'react';
import getDate from '../../source/getDate';
import {numberShowWeekSelector, projectSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

// data
import monthDays from '../../source/getMonthDays';
// styled
import { HeaderStyle, Days, Box, Month, Button } from './Header.styled'

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


class Header extends Component {
   render() {
    return (
      <HeaderStyle>
        <Month>
          <Button type='button' onClick={this.props.changeMonth.bind(null, false)}>Prev</Button>
            {
              month[this.props.month]
            }
          <Button type='button' onClick={this.props.changeMonth.bind(null, true)}>Next</Button>
        </Month>
        <Days>
          {
            monthDays(this.props.year, this.props.month).map(i => <Box isLine={((i - 1) % 5 === 0)}>{i}</Box>)
          }
        </Days>
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
