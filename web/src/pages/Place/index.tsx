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

  console.log(`Valor do newPlace${newPlace}`);

  const [cep, setCep] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    numero: "",
    localidade: "",
    uf: "",
  });

  console.log(`Valor do cep fora: ${{cep}}`);

  async function onGetCep() {
    const getCep = await fetch(
      `https://viacep.com.br/ws/${newPlace.address}/json/`
    );

    const cep = await getCep.json();

    setCep({...cep, numero: cep.numero});

    if (cep.erro) {
      toast("CEP Inválido!", {
        type: "error",
        autoClose: 3000,
      });

      return;
    }
  }

  async function onSubmit() {
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
            label="Nome do local"
            name="name"
            type="text"
            value={newPlace.name}
            onChange={setnewPlace}
          />

          <div className="search-cep">
            <Input
              label="CEP (Somente números)"
              name="address"
              type="text"
              value={newPlace.address}
              placeholder="00000000"
              onChange={setnewPlace}
            />
            <button onClick={onGetCep}>Consultar CEP</button>
          </div>

          <Input
            label="Rua"
            name="logradouro"
            type="text"
            value={cep.logradouro}
            onChange={() => {}}
          />

          <div className="bairro-n">
            <Input
              label="Bairro"
              name="bairro"
              type="text"
              value={cep.bairro}
              onChange={() => {}}
            />
            <Input
              label="Nº"
              name="numero"
              type="text"
              value={cep.numero}
              onChange={setCep}
            />
          </div>

          <Input
            label="Cidade"
            name="localidade"
            type="text"
            value={cep.localidade}
            onChange={() => {}}
          />

          <Input
            label="Estado"
            name="uf"
            type="text"
            value={cep.uf}
            onChange={() => {}}
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
