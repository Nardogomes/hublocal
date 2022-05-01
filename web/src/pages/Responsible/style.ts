import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 66rem;
  height: 32rem;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.62rem;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    align-self: flex-start;
    margin-bottom: 1rem;
    color: #4685fe;
  }

  .buttons {
    width: 32rem;
    margin-top: 3rem;

    display: flex;
    justify-content: space-between;

    button {
      width: 12rem;
      height: 3rem;
      border: none;
      border-radius: 0.25rem;
      background-color: #7cfcc2;
      font-size: 1.02rem;
      font-weight: 500;
      cursor: pointer;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.9);
      }

      &[name="cancel"] {
        color: #fff;
        background-color: #e71e1e;
      }
    }
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;

  input[name="contact"] {
    width: 15rem;
  }
`;
