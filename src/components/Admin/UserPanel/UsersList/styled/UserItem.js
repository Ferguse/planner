import styled from 'styled-components';

export default styled.div`
  padding: 5px 0;
  
  span {
    color: ${({ user }) => ((user) ? 'darkcyan' : '#473e5e')};
    font-weight: normal;
  }
`;
