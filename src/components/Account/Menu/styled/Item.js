import styled from 'styled-components';

export default styled.li`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${({ isActivePage }) => ((isActivePage) ? 'darkcyan' : 'darkgrey')};
  transition: 0.5s;
  
  
  &:hover {
    color: darkcyan;
  }
`;
