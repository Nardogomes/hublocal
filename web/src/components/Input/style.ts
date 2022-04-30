import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.8rem;
`;

export const InputStyled = styled.input`
  height: 1.7rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border: none;
  border-radius: 0.62rem;
  font-size: 1.5rem;
  padding: 0.6rem;
`;
