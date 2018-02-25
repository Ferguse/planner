import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0;
  min-height: 50px;
`;

const Header = styled.div`
  width: 28%;
  display: flex;
  padding: 0 0 0 2%;
`;

const Percent = styled.div`
  margin-right: 15px;
  width: 10%;
  color: #919191;
  display: flex;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  width: 5%;
  background-color: ${({ isActive }) => ((isActive) ? 'darkred' : 'darkcyan')};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Calendar = styled.div`
  display: flex;
  width: 68%;
  padding: 0 2% 0 0;
`;

export { Container, Header, Percent, InfoBox, Box, Calendar };
