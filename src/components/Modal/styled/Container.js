import styled from 'styled-components';

export default styled.div`
  position: fixed;
  padding: 20px;
  top: 110px;
  left: 210px;
  //transform: translate(-50%, -50%);
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, .3);
  width: 300px;
  background-color: #fff;
  transition: 0.5s;
  color: #000000;
  
  &:hover {
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, .7);
  }
`;
