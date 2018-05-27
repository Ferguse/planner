import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: #6062fd;
  
  button {
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    
    &:focus {
      outline: none;
    }
    
    span {
      color: ${({ isActive }) => ((isActive) ? '#6062fd' : '#473e5e')};
      font-weight: normal;
      border-bottom: 1px solid ${({ isActive }) => ((isActive) ? '#6062fd' : 'none')};
    }
  }
`;
