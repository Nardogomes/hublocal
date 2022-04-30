import { Header } from '../../components/Header';

import Logo from '../../assets/logo.png';

import { Container, Content, LeftContent, RightContent } from './style';

export function SignIn() {
  return (
    <Container>
      <Header />
      <Content>
        <LeftContent>
          <img src={Logo} alt="logomarca da empresa Hublocal" />
        </LeftContent>
        <RightContent>
          <h1>Sign In</h1>
        </RightContent>
      </Content>
    </Container>
  );
}
