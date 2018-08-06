import styled from 'styled-components';

export default styled.div`
  display: flex;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;
  
  button {
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    text-align: left;
    
    &:focus {
      outline: none;
    }
    
    span {
      color: ${({ isActive }) => ((isActive) ? 'darkcyan' : '#473e5e')};
      font-weight: normal;
      transition: 0.4s;
    }
  }
`;
