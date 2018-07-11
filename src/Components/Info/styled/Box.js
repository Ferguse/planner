import styled from 'styled-components';

export default styled.div`
  width: 5%;
  background-color: ${({ isActive }) => ((isActive) ? 'darkred' : 'darkcyan')};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;