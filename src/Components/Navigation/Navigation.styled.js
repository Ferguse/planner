import styled from 'styled-components';

export default styled.div`
  width: 90%;
  height: 50px;
  background-color: #6062fd;
  color: white;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: left;
  padding: 5px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  
  nav {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    
    li {
      margin-right: 10px;
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
    }
  }
`;
