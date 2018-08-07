import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 50px;
  height: 30px;
    
  label {
    width: 50px;
    height: 30px;
    display: flex;
    border: 1px solid darkcyan;
    border-radius: 30px;
    background-color: #ffffff;
    position: relative;
  }
  
  input:checked + label {
    background-color: darkcyan;
  }
  
  label::after {
    position: absolute;
    content: '';
    width: 24px;
    height: 24px;
    top: 2px;
    left: 2px;
    background-color: darkcyan;
    border-radius: 50%;
    transition: 0.5s;
  }
  
  input:checked + label::after {
    background-color: #ffffff;
    left: 23px;
  }
  
  input {
    display: none;
  }
`;
