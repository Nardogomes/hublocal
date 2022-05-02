import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Fields } from "../Company/style";

export function Ticket() {
  const [newTicket, setNewTicket] = useState({
    title: "",
    createdAt: "",
    updatedAt: "",
    owner: "",
    tec_ticket: "",
    status: "",
    place: ""
  });

  return (
    <Container>
      <Header />

      <Content>
        <h1>Cadastro de Ticket</h1>

        <Fields>
          <Input
            label="Titulo"
            name="title"
            type="text"
            value={newTicket.title}
            onChange={setNewTicket}
          />

          <Input
            label="Proprietário"
            name="owner"
            type="text"
            value={newTicket.owner}
            onChange={setNewTicket}
          />

          <Input
            label="Descrição"
            name="description"
            type="text"
            value={newTicket.tec_ticket}
            onChange={setNewTicket}
          />

          <Input
            label="Descrição"
            name="description"
            type="text"
            value={newTicket.tec_ticket}
            onChange={setNewTicket}
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
