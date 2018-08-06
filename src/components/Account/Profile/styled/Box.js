import styled from 'styled-components';

export default styled.div`
  padding: 10px 0 0 20px;
  position: relative;
  display: flex;
  //align-items: center;
  min-height: 70px;
  justify-content: center;
  flex-direction: column;
  
  p {
    display: ${({ isEditable }) => ((isEditable) ? 'none' : 'block')};
    padding: 0 10px;
    margin: 0;
  }
  
  input {
    display: ${({ isEditable }) => ((isEditable) ? 'block' : 'none')};
    border: none;
    border-bottom: 1px solid darkcyan;
    padding: 5px 10px;
    color: #333333;
    
    &:focus, &:active {
      outline: none;
    }
  }
  
  button {
    position: absolute;
    width: 25px;
    height: 25px;
    border: none;
    background-color: darkcyan;
    right: 20px;
    top: 20px;
    transition: 0.5s;
    overflow: hidden;
    display: ${({ isEditable }) => ((isEditable) ? 'none' : 'block')};
    cursor: pointer;
    
    &:active, &:focus {
      outline: 1px solid darkcyan;
    }
    
    &:hover {
      opacity: 0.9;
    }
  }
  
  img {
    width: 110%;
    right: 0;
    top: 5%;
    position: absolute;
  }
`;
