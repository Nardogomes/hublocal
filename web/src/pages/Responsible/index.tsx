import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Fields } from "../Responsible/style";

export function Responsible() {
  const [newResponsible, setNewResponsible] = useState({
    name: "",
    contact: "",
    address: "",
  });

  return (
    <Container>
      <Header />

      <Content>
        <h1>Cadastro de responsável</h1>

        <Fields>
          <Input
            label="Nome"
            name="name"
            type="text"
            value={newResponsible.name}
            onChange={setNewResponsible}
          />

          <Input
            label="Telefone"
            name="contact"
            type="text"
            value={newResponsible.contact}
            onChange={setNewResponsible}
          />

          <Input
            label="Endereço"
            name="address"
            type="text"
            value={newResponsible.address}
            onChange={setNewResponsible}
          />
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
