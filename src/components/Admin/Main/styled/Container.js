import styled from 'styled-components';
import showContent from '../../styled/showContent.keyframe';

export default styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  height: 100vh;
  overflow: hidden;
  opacity: 0;
  margin-top: 20px;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
  position: relative;
  background-color: #ffffff;
  width: 100%;
`;
