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

  .name {
    width: 100%;

    input[name="nome"],
    input[name="sobrenome"] {
      width: calc(32rem - 20px);
    }

    display: flex;
    justify-content: space-between;
  }

  input[type="email"] {
    width: calc(100% - 2rem);
  }

  .password {
    width: 100%;

    input[name="password"],
    input[name="confirm-password"] {
      width: calc(32rem - 20px);
    }

    display: flex;
    justify-content: space-between;
  }
`;
