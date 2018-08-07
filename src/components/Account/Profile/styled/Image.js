import styled from 'styled-components';

export default styled.div`
  width: 40%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  label {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid darkcyan;
    overflow: hidden;
    position: relative;
    transition: 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: darkcyan;
      opacity: 0;
      transition: 0.5s;
      z-index: 0;
    }
    
    &:hover {
      &::after {
        opacity: 1;
      }
      span {
        opacity: 1;
      }
    }
  }
  
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.5s;
    z-index: 1;
    color: #ffffff;
    text-align: center;
  }
  
  img {
    width: 100%;
    margin-bottom: 20px;
  }
  input {
    display: none;
  }
`;
