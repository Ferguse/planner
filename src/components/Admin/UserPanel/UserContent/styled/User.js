import styled from 'styled-components';
import showContent from '../../../styled/showContent.keyframe';

export default styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  margin-top: 20px;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
  width: 100%;
`;
