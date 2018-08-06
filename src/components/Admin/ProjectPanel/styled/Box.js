import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333333;
  margin-bottom: 1rem;
  padding-bottom: 20px;

  
  label, p {
    //margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  input, textarea {
    padding-top: 15px;
    height: 50px;
    width: 100%;
    border: none;
    border-bottom: 1px solid darkcyan;
    color: #6062fd;
    text-align: left;
    font-style: italic;
    transition: 0.4s;
    
    &:focus {
      outline: none;
      border-bottom: 2px solid darkcyan;
    }
  }
`;
