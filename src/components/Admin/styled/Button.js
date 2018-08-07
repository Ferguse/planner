import styled from 'styled-components';

export default styled.button`
    border: none;
    background: ${({ color }) => color};
    padding: 10px 15px;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    height: 50px;
    opacity: 0.9;
    transition: 0.4s;
    position: relative;
    
    &:hover {
      opacity: 1;
    }
    
    &:focus {
      outline: 1px solid red;
    }
    
    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      right: ${({ direction }) => ((!direction) ? '-50px' : null)} ;
      left: ${({ direction }) => ((!direction) ? null : '-50px')} ;
      border: 25px solid transparent;
      top: 0;
      border-left: 
        25px solid ${({ color, direction }) =>
    (!direction ? color : 'transparent')};
      border-right: 
        25px solid ${({ color, direction }) =>
    (direction ? color : 'transparent')};  
    }
`;
