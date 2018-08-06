import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  
  label {
    padding: 5px 0;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding-top: 15px;
    font-style: italic;
    border: none;
    border-bottom: 1px solid darkcyan;
    transition: 0.4s;
    
    &:focus {
      outline: none;
      border-bottom: 2px solid darkcyan;
    }
  }
`;
