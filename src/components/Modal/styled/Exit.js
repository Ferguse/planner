import styled from 'styled-components';

export default styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  transition: 0.5s;
  top: 10px;
  right: 10px;
  opacity: 0.7;
  
  img {
    width: 100%;
  }
  
  &:hover {
    opacity: 1;
  }
    
  &:active, &:focus {
    outline: none;
  }
`;
