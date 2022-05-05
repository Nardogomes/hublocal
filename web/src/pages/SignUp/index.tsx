import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Fields } from "./style";

export function SignUp() {
  const [newUser, setNewUser] = useState({
    name: "",
    sobrenome: "",
    email: "",
    password: "",
  });

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
              value={newUser.name}
              onChange={setNewUser}
            />

            <Input
              label="Sobrenome"
              name="sobrenome"
              type="text"
              value={newUser.sobrenome}
              onChange={setNewUser}
            />
          </div>

          <Input
            label="E-mail"
            name="email"
            type="email"
            value={newUser.email}
            onChange={setNewUser}
          />

          <div className="password">
            <Input
              label="Senha"
              name="password"
              type="password"
              value={newUser.password}
              onChange={setNewUser}
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
