import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
  margin-bottom: 1rem;
  
  label, p {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  input, textarea {
    padding: 15px 20px;
    width: 80%;
    border: 1px solid #eeeeee;
    color: #6062fd;
    text-align: center;
    
    &:focus {
      outline: 1px solid #6062fd;
    }
  }
`;
