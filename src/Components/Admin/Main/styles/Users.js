import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  
  button {
    border: none;
    background: #ff959e;
    padding: 5px 0;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    
    &:focus {
      outline: 1px solid red;
    }
  }
`;
