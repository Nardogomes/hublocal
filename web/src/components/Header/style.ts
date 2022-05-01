import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #4685fe;
`;

export const Content = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.8rem 1rem 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10rem;
    height: 5rem;
    background-color: #f5f5f5;
    border-radius: 0.25rem;
  }

  span {
    width: 20rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
