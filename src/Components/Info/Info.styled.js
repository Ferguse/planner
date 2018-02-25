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

export { Container, Header, Percent, InfoBox };