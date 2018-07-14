import styled from 'styled-components';
import showContent from '../../styled/showContent.keyframe';

export default styled.div`
  padding: 2rem 30%;
  border-bottom: 1px solid #eee;
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;
  margin-top: 20px;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
  
   button {
    border: none;
    background: #ff959e;
    padding: 5px 0;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    margin: 30px 30%;
    
    &:focus {
      outline: 1px solid red;
    }
  }
`;
