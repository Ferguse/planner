import styled from 'styled-components';

export default styled.div`
  padding: 5px 0;
  
  span {
    color: ${({ user }) => ((user) ? '#6062fd' : '#473e5e')};
    font-weight: normal;
    border-bottom: 1px solid ${({ user }) => ((user) ? '#6062fd' : 'none')};
  }
`;
