import styled from 'styled-components';

const HeaderStyle = styled.div`
 display: flex;
 width: 100%;
 border-bottom: 1px solid #eeeeee;
 margin-bottom: 15px;
 position: fixed;
 top: 60px;
 background: white;
`;

const Days = styled.div`
   width: 70%;
   padding: 0 2% 0 0 ;
   height: 40px;
   display: flex;
   align-items: center;
`;

const Box = styled.div`
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

const Month = styled.div`
   width: 30%;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   border-bottom: 1px solid #eee;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: darkcyan;
  
  &:focus, &:active {
    outline: none;
  }
`;

export {
  HeaderStyle,
  Days,
  Box,
  Month,
  Button
};
