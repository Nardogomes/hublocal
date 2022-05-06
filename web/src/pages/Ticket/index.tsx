import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";

import { Container, Content, Fields } from "./style";

export function Ticket() {
  const navigate = useNavigate();

  const [newTicket, setNewTicket] = useState({
    title: "",
    owner: "",
    description: "",
  });

  async function onSubmit() {
    const request = await fetch("http://localhost:3333/saveticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newTicket }),
    });

    if (request.ok) {
      toast("Local cadastrado com sucesso.", {
        type: "success",
        autoClose: 3000,
        onClose: () => navigate("/tickets-cad"),
      });
    }
  }  

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
            value={newTicket.description}
            onChange={setNewTicket}
          />
        </Fields>

        <div className="buttons">
          <button onClick={onSubmit}>Cadastrar</button>
          <Link to="/tickets-cad">
            <button name="cancel">Cancelar</button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
