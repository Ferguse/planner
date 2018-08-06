import styled from 'styled-components';

export default styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  
  li {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  
  a {
    color: white;
    opacity: 0.9;
    text-decoration: none;
    transition: .5s;
    font-size: 1rem;
    
    &:hover {
      opacity: 1;
    }
    
    &:active, &:visited {
      color: white;
  } 
`;
