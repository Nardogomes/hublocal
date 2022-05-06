import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 74rem;
  min-height: 32rem;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.62rem;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.4);
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
