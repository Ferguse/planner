import styled from 'styled-components';
import showContent from '../../styles/showContent.keyframe';

export default styled.div`
  display: ${({ user }) => ((user) ? 'flex' : 'none')};
  flex-direction: column;
  opacity: 0;
  margin-top: 20px;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
`;
