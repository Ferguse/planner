import styled from 'styled-components';

// keyframe
import showContent from '../../styled/showContent.keyframe';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
  
  p {
    width: 70%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
