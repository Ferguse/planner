import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 60px);
  background: rgba(43,85,204,0.1);
`;

const showContent = keyframes`
  from {
    opacity: 0;
    margin-top: 20px;
  }
  
  to {
  opacity: 1;
  margin-top: 0px;
  }
`;

const Project = styled.div`
  padding: 2rem 30%;
  border-bottom: 1px solid #eee;
  width: 100%;
  display: ${({ isActive }) => ((isActive) ? 'block' : 'none')};
  opacity: 0;
  margin-top: 20px;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
  margin-bottom: 1rem;
  
  label, p {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  input, textarea {
    padding: 15px 20px;
    width: 80%;
    border: 1px solid #eeeeee;
    color: #6062fd;
    text-align: center;
    
    &:focus {
      outline: 1px solid #6062fd;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px 0;
  flex-wrap: wrap;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: #6062fd;
  
  button {
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    
    &:focus {
      outline: none;
    }
    
    span {
      color: ${({ isActive }) => ((isActive) ? '#6062fd' : '#473e5e')};
      font-weight: normal;
      border-bottom: 1px solid ${({ isActive }) => ((isActive) ? '#6062fd' : 'none')};
    }
  }
`;

const Users = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: ${({ user }) => ((user) ? 'flex' : 'none')};
  flex-direction: column;
  opacity: 0;
  margin-top: 20px;
  animation: ${showContent} 1s ease-in-out;
  animation-fill-mode: forwards;

`;

const UserPannel = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 20px 10%;
  
  >div:first-child {
    width: 10%;
    border-right: 1px solid #6062fd;
  }
  
  >div:last-child {
    width: 70%;
  }
`;

const UserItem = styled.div`
  padding: 5px 0;
  
  span {
    color: ${({ user }) => ((user) ? '#6062fd' : '#473e5e')};
    font-weight: normal;
    border-bottom: 1px solid ${({ user }) => ((user) ? '#6062fd' : 'none')};
  }
`;

const UserLine = styled.div`
  display: flex;
  padding: 10px 0;
  
  label {
    width: 20%;
    padding: 5px 0;
  }
  
  input {
    width: 80%;
    padding: 5px 15px;
    color: #6062fd;
    
    &:focus {
      outline: 1px solid #6062fd;
    }
  }
`

export { Container, Project, Box, Title, Nav, User, UserPannel, UserItem, Users, UserLine };
