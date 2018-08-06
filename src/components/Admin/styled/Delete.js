import styled from 'styled-components';

export default styled.button`
  position: absolute;
  top: 70px;
  right: 20px;
  border: none;
  padding: 10px 15px;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  height: 50px;
  width: 50px;
  opacity: 0.8;
  transition: 0.4s;
  
  &:hover {
    opacity: 1;
  }
    
    &:focus {
      outline: 1px solid red;
    }
    img {
      width: 100%;
    }
`
