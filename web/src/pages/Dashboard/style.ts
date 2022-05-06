import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 74rem;
  min-height: 26rem;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.62rem;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.4);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .companies,
  .responsibles,
  .places,
  .tickets {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
      width: 18rem;
      margin-top: 1rem;
      text-align: center;
      background-color: #7cfcc2;
      font-weight: 500;
    }

    ul {
      margin-top: 2rem;
      list-style: none;

      li {
        margin-bottom: 1rem;
      }
    }
  }

  button {
    width: 12rem;
    height: 2rem;
    margin-top: 1rem;
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
`;
