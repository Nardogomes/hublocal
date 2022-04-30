import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 8rem;
  background-color: #4685fe;
`;

export const Content = styled.div`
  width: 80rem;
  margin: 0 auto;
  padding: 1.8rem 0 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10rem;
    heigth: 5rem;
    background-color: #F5F5F5;
    border-radius: 0.25rem;
  }

  span {
    width: 20rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
