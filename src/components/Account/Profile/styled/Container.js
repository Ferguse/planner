import styled from 'styled-components';

// keyframe
import showContent from '../../styled/showContent.keyframe';

export default styled.div`
  padding: 20px 0;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
`;
