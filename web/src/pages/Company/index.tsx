import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";

import { Container, Content, Fields } from "../Company/style";

export function Company() {
  const navigate = useNavigate();

  const [newCompany, setNewCompany] = useState({
    name: "",
    cnpj: "",
    description: "",
  });

  async function onSubmit() {
    const request = await fetch("http://localhost:3333/savecompany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newCompany }),
    });

    if (request.ok) {
      toast("Empresa cadastrada com sucesso.", {
        type: "success",
        autoClose: 3000,
        onClose: () => navigate("/empresas-cad"),
      });
    }
  }

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
          <button onClick={onSubmit}>Cadastrar</button>
          <Link to="/empresas-cad">
            <button name="cancel">Cancelar</button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
