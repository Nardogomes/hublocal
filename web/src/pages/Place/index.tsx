import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";

import { Container, Content, Fields } from "../Place/style";

export function Place() {
  const navigate = useNavigate();

  const [newPlace, setnewPlace] = useState({
    name: "",
    address: "",
  });

  async function onSubmit() {
    const getCep = await fetch(
      `https://viacep.com.br/ws/${newPlace.address}/json/`
    );

    const cep = await getCep.json();

    if (cep.erro) {
      toast("CEP Inválido!", {
        type: "error",
        autoClose: 3000,
      });

      return;
    }

    const request = await fetch("http://localhost:3333/savelocation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: cep, name: newPlace.name }),
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
            onChange={setnewPlace}
          />

          <Input
            label="CEP"
            name="address"
            type="text"
            value={newPlace.address}
            onChange={setnewPlace}
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
