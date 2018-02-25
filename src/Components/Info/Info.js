import React, {Component} from 'react';

// components
import Calendar from '../Calendar/Calendar'

//styled
import { Container, Header, Percent, InfoBox } from './Info.styled';
const getPercent = (arr, props) => {
  let result = arr.filter(i => {
    return i.user === props.user.name;
  })[0]
  return (result) ? result.percent + '%' : '-';
}
const Info = (props) => (
  <Container>
    <Header>
      <Percent>
        <span>{getPercent(props.project.get('workload'), props)}</span>
      </Percent>
      <InfoBox>
        <span>{props.title}</span>
      </InfoBox>
    </Header>
    <Calendar project={props.project} user={props.user}/>
  </Container>
);



export default Info;
