import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Fields } from "../Company/style";

export function Company() {
  const [newCompany, setNewCompany] = useState({
    name: "",
    cnpj: "",
    description: "",
  });

  return (
    <Container>
      <Header />

      <Content>
        <h1>Cadastro de empresa</h1>

        <Fields>
          <Input
            label="Nome"
            name="name"
            type="text"
            value={newCompany.name}
            onChange={setNewCompany}
          />

          <Input
            label="CNPJ"
            name="cnpj"
            type="text"
            value={newCompany.cnpj}
            onChange={setNewCompany}
          />

          <Input
            label="Descrição"
            name="description"
            type="textarea"
            value={newCompany.description}
            onChange={setNewCompany}
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
