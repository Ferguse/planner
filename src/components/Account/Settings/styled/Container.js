import styled from 'styled-components';

// keyframe
import showContent from '../../styled/showContent.keyframe';

export default styled.div`
  position: relative;
  padding: 20px;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
`;
