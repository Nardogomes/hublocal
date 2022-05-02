import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Fields } from "../Place/style";

export function Place() {
  const [newPlace, setNewPlace] = useState({
    name: "",
    address: "",
  });

  return (
    <Container>
      <Header />

      <Content>
        <h1>Cadastro de local</h1>

        <Fields>
          <Input
            label="Nome"
            name="name"
            type="text"
            value={newPlace.name}
            onChange={setNewPlace}
          />

          <Input
            label="Endereço"
            name="address"
            type="text"
            value={newPlace.address}
            onChange={setNewPlace}
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
