import React, {PureComponent} from 'react';
import monthDays from '../../source/getMonthDays';

//styled
import { Container, Header, Percent, InfoBox, Box, Calendar } from './Info.styled';

class Info extends PureComponent {
  constructor(props) {
    super();

  }

  getActiveElement = (i) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.props.month;
    console.log(month)
    const start = new Date(this.props.project.get('dates').first().get('start')).getTime();
    const end = new Date(this.props.project.get('dates').first().get('end')).getTime();
    const currentDate = new Date(`${year}-${month + 1}-${i}`);
    return (currentDate.getTime() > start && currentDate.getTime() < end)
  }

  render () {
    return (
      <Container>
      <Header>
        <InfoBox>
          <span>{this.props.project.get('user')}</span>
        </InfoBox>
      </Header>
      <Calendar>
        {
          monthDays(this.props.year, this.props.month).map(i => <Box isActive={this.getActiveElement(i)} /> )
        }
      </Calendar>
    </Container>
  )
  }
}



export default Info;
