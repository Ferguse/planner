import styled from 'styled-components';

export default styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: darkcyan;
  width: 30px;
  opacity: 0.9;
  height: 30px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:focus, &:active {
    outline: none;
  }
  
  &:hover {
    opacity: 1;
  }
  
  img {
     width: 100%;
  }
  
  &:last-child img {
    transform: rotate(180deg);
  }
`;
