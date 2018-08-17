import React, {PureComponent} from 'react';

// source
import monthDays from '../../../source/getMonthDays';

//styled
import Container from './styled/Container';
import InfoBox from './styled/InfoBox';
import Box from './styled/Box';
import Calendar from './styled/Calendar';
import Header from './styled/Header';

class Info extends PureComponent {

  getActiveElement = (i) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.props.month;
    const start = new Date(this
      .props
      .user
      .getIn(['workload', this.props.project.get('id'), 'dates', 0, 'start']))
      .getTime();
    const end = new Date(this
      .props
      .user
      .getIn(['workload', this.props.project.get('id'), 'dates', 0, 'end']))
      .getTime();
    const currentDate = new Date(`${year}-${month + 1}-${i}`);
    return (currentDate.getTime() > start && currentDate.getTime() < end)
  }

  render () {
    return (
      <Container>
      <Header>
        <InfoBox>
          <span>{this.props.user.get('name')}</span>
        </InfoBox>
      </Header>
      <Calendar>
        {
          monthDays(this.props.year, this.props.month)
            .map((item, i) => <Box isActive={this.getActiveElement(item)} key={item} /> )
        }
      </Calendar>
    </Container>
  )
  }
}



export default Info;
