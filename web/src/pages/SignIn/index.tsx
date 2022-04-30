import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Content, LeftContent, RightContent } from './style';

import Logo from '../../assets/logo.png';

export function SignIn() {
  const [loginValues, setLoginValues] = useState({
    email: '',
    senha: ''
  });

  return (
    <Container>
      <Header />

      <Content>
        <LeftContent>
          <img src={Logo} alt="logomarca da empresa Hublocal" />
        </LeftContent>

        <RightContent>
          <h1>Sign In</h1>

          <Input
            label='E-mail'
            name='email'
            type='text'
            value={loginValues.email}
            onChange={setLoginValues}
          />

          <Input
            label='Senha'
            name='senha'
            type='password'
            value={loginValues.senha}
            onChange={setLoginValues}
          />

          <Link to="/empresa">
            <button>Entrar</button>
          </Link>
        </RightContent>
      </Content>
    </Container>
  );
}
