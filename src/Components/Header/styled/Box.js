import styled from 'styled-components';

export default styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &::after {
    position: absolute;
    content: '';
    height: 100vh;
    width: 1px;
    background: ${({ isLine }) => ((isLine) ? '#eee' : 'transparent')};
    top: 0;
    left: 0;
  }
`;