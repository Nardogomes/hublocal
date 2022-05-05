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

  const [cep, setCep] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    numero: "",
    localidade: "",
    uf: "",
  });

  async function onGetCep() {
    const getCep = await fetch(
      `https://viacep.com.br/ws/${newResponsible.address}/json/`
    );

    const cep = await getCep.json();

    setCep({ ...cep, numero: cep.numero });

    if (cep.erro) {
      toast("CEP Inválido!", {
        type: "error",
        autoClose: 3000,
      });

      return;
    }
  }

  async function onSubmit() {
    const request = await fetch("http://localhost:3333/saveresponsible", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newResponsible.name,
        contact: newResponsible.contact,
        address: cep,
      }),
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
            label="Nome do responsável"
            name="name"
            type="text"
            value={newResponsible.name}
            onChange={setNewResponsible}
          />

          <Input
            label="Telefone (Somente números)"
            name="contact"
            type="text"
            value={newResponsible.contact}
            placeholder="085900000000"
            onChange={setNewResponsible}
          />

          <div className="search-cep">
            <Input
              label="CEP (Somente números)"
              name="address"
              type="text"
              value={newResponsible.address}
              placeholder="00000000"
              onChange={setNewResponsible}
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
          <Link to="/responsaveis-cad">
            <button name="cancel">Cancelar</button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
