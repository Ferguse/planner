import styled from 'styled-components';

export default styled.div`
  width: 5%;
  background-color: ${({ isActive }) =>
    ((isActive) ? 'rgba(0, 139, 139, 0.9)' : 'rgba(0, 139, 139, 0.05)')};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
