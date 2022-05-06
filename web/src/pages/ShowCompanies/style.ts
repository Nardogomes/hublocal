import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 66rem;
  min-height: 32rem;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.62rem;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.4);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    align-self: flex-start;
    margin-bottom: 1rem;
    color: #4685fe;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: #969cb3;
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      color: #969cb3;

      &:first-child {
        color: #363f5f;
      }
    }
  }

  button {
    width: 14rem;
    height: 4rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #7cfcc2;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  #dashboard {
    position: absolute;
    right: 1rem;
  }
`;
