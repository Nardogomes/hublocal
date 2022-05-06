import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 72rem;
  height: 32rem;
  margin-top: 2rem;
  background-color: #fff;
  border-radius: 0.62rem;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.4);

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;

  h1 {
    color: #4685fe;
  }
  button {
    width: 8rem;
    height: 2rem;
    border: none;
    background-color: #7cfcc2;
    font-size: 1.05rem;
    font-weight: 500;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 28rem;
    height: 10rem;
  }
`;

export const RightContent = styled.div`
  width: 28rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  button {
    border-radius: 0.25rem;
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
