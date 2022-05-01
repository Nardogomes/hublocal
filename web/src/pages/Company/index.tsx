import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Fields } from "../Company/style";

export function Company() {
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
            value="Alguma coisa"
            onChange={() => {}}
          />

          <Input
            label="CNPJ"
            name="cnpj"
            type="text"
            value="00.000.000/000-12"
            onChange={() => {}}
          />

          <Input
            label="Descrição"
            name="description"
            type="textarea"
            value=""
            onChange={() => {}}
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
