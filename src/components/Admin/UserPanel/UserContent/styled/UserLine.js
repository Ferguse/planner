import styled from 'styled-components';

export default styled.div`
  display: flex;
  padding: 10px 0;
  
  label {
    width: 20%;
    padding: 5px 0;
  }
  
  input {
    width: 80%;
    padding: 5px 15px;
    color: #6062fd;
    
    &:focus {
      outline: 1px solid #6062fd;
    }
  }
`;
