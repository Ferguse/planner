import styled from 'styled-components';

// keyframes
import showContent from '../../styled/showContent.keyframe';

export default styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
  
  div {
    width: 100%;
  }
`;
