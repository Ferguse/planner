import styled from 'styled-components';

const getStyles = () => {
  // if (this.filterProps() && this.filterProps().get('weeks').first() === num) {
  //   if (this.props.project.get('title') === 'Отпуск') {
  //     return 'calendar__date';
  //   } else {
  //     return 'calendar__date work-block';
  //   }
  // } else {
  //   return 'calendar__date';
  // }
}

const Container = styled.div`
  width: 70%;
  display: flex;
`;

const Calendar = styled.div`
  width: 25%;
  height: 100%;
  position: relative;
  
  div {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
  }
`;

export { Container, Calendar };
