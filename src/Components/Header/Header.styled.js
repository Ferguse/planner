import styled from 'styled-components';

const HeaderStyle = styled.div`
 display: flex;
 width: 100%;
 border-bottom: 1px solid #eeeeee;
 margin-bottom: 15px;
`;

const Weeks = styled.div`
   width: 70%;
   margin-left: 30%;
   height: 40px;
   
   ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    height: 100%;
  }

  li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 25%;
      position: relative;
      
      &::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 200vh;
        background: #eeeeee;
        left: 0;
        top: 10px;
      }
  }
`;

export {
  HeaderStyle,
  Weeks
}