import styled from 'styled-components';

export default styled.button`
  color: #ffffff;
  border: none;
  border-radius: 50%;
  background-color: darkcyan;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 20px auto;
  outline: none;
  opacity: 0.8;
  transition: 0.5s;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
  }
`;
