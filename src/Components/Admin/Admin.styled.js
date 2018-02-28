import styled from 'styled-components';

const Container = styled.div`
  padding-top: 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Project = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #eee;
  width: 80%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
  margin-bottom: 1rem;
  
  label {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  input, textarea {
    padding: 15px 20px;
    width: 80%;
    border: 1px solid #eeeeee;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #171420;
  margin-bottom: 2rem;
  font-weight: bold;
`;


export { Container, Project, Box, Title };
