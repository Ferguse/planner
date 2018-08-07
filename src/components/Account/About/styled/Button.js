import styled from 'styled-components';

export default styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: darkcyan;
  border: none;
  border-radius: 5px;
  opacity: 0.9;
  transition: 0.5s;
  padding: 10px 15px;
  color: #ffffff;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
  
  &:active, &:focus {
    outline: none;
  }
`;
