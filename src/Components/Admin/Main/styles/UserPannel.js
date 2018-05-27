import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 20px 10%;
  
  >div:first-child {
    width: 10%;
    border-right: 1px solid #6062fd;
  }
  
  >div:last-child {
    width: 70%;
  }
`;
