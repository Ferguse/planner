import styled from 'styled-components';

export default styled.button`
  position: relative;
  background-color: darkcyan;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  padding: 10px 20px;
  margin: 20px auto;
  outline: none;
  opacity: 0.8;
  transition: 0.5s;
  
  &:hover {
    opacity: 1;
  }
`;
