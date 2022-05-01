import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Fields } from "../Responsible/style";

export function Responsible() {
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
            value="Alguma coisa"
            onChange={() => {}}
          />

          <Input
            label="Telefone"
            name="contact"
            type="text"
            value="(00) 91213-4645"
            onChange={() => {}}
          />

          <Input
            label="Endereço"
            name="address"
            type="text"
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
