import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";

import { Container, Content, Fields } from "../Place/style";

export function Place() {
  const navigate = useNavigate();

  const [newPlace, setNewPlace] = useState({
    name: "",
    address: "",
  });

  async function onSubmit() {
    const request = await fetch("http://localhost:3333/savelocation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newPlace }),
    });

    if (request.ok) {
      toast("Local cadastrado com sucesso.", {
        type: "success",
        autoClose: 3000,
        onClose: () => navigate("/locais-cad"),
      });
    }
  }

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
          <button onClick={onSubmit}>Cadastrar</button>
          <Link to="/locais-cad">
            <button name="cancel">Cancelar</button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
