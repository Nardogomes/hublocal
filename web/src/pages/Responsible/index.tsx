import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";

import { Container, Content, Fields } from "../Responsible/style";

export function Responsible() {
  const navigate = useNavigate();

  const [newResponsible, setNewResponsible] = useState({
    name: "",
    contact: "",
    address: "",
  });

  async function onSubmit() {
    const request = await fetch("http://localhost:3333/saveresponsible", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newResponsible }),
    });

    if (request.ok) {
      toast("Responsável cadastrado com sucesso.", {
        type: "success",
        autoClose: 3000,
        onClose: () => navigate("/responsaveis-cad"),
      });
    }
  }

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
          <button onClick={onSubmit}>Cadastrar</button>
          <Link to="/responsaveis-cad">
            <button name="cancel">Cancelar</button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
