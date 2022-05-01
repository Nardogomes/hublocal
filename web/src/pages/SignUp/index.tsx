import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Fields } from "../SignUp/style";

export function SignUp() {
  return (
    <Container>
      <Header />

      <Content>
        <h1>Sign Up</h1>

        <Fields>
          <div className="name">
            <Input
              label="Nome"
              name="nome"
              type="text"
              value="Alguma coisa"
              onChange={() => {}}
            />

            <Input
              label="Sobrenome"
              name="sobrenome"
              type="text"
              value="Alguma coisa"
              onChange={() => {}}
            />
          </div>

          <Input
            label="E-mail"
            name="email"
            type="email"
            value="Alguma coisa"
            onChange={() => {}}
          />

          <div className="password">
            <Input
              label="Senha"
              name="password"
              type="password"
              value=""
              onChange={() => {}}
            />
            <Input
              label="Confirmar senha"
              name="confirm-password"
              type="password"
              value=""
              onChange={() => {}}
            />
          </div>
        </Fields>

        <div className="buttons">
          <button>Cadastrar</button>
          <Link to="/">
            <button name="cancel">Cancelar</button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
