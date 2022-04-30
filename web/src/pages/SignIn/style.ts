import styled from 'styled-components';

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
  background-color: #FFF;
  border-radius: 0.62rem;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.4);

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LeftContent =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 28rem;
    height: 10rem;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
