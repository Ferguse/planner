import React, { Component } from 'react';

// source
import monthDays from '../../source/getMonthDays';
import month from '../../source/months';

// styled
import Container from './styled/Container';
import Month from './styled/Month';
import Button from './styled/Button';
import Days from './styled/Days';
import Box from './styled/Box';

// icons
import arrow from '../../assets/icons/arrow.svg';

class Header extends Component {
  render() {
   return (
     <Container>
       <Month>
         <Button
           type='button'
           onClick={this.props.changeMonth.bind(null, false)}
         >
           <img src={arrow} alt='arrow' />
         </Button>
           {
             month[this.props.month]
           }
         <Button
           type='button'
           onClick={this.props.changeMonth.bind(null, true)}
         >
           <img src={arrow} alt='arrow' />
         </Button>
       </Month>
       <Days>
         {
           monthDays(this.props.year, this.props.month)
             .map(item => (
               <Box isLine={((item - 1) % 5 === 0)} key={item}>
                 {item}
               </Box>
               )
             )
         }
       </Days>
     </Container>
   );
  }
}

export default Header;
