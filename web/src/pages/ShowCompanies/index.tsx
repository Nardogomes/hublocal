import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "../ShowCompanies/style";

interface ShowCompaniesProps {
  id: string,
  name: string,
  cnpj: string,
  description: string
}

export function ShowCompanies() {
  const [companies, setCompanies] = useState<ShowCompaniesProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/allcompany")
      .then(response => response.json())
      .then(data => setCompanies(data))
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <h1>Empresas Cadastratadas</h1>
        
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CNPJ</th>
              <th>Descrição</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>{company.cnpj}</td>
                <td>{company.description}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
        <Link to="/empresa">
          <button>+ Adicionar empresa</button>
        </Link>
      </Content>
    </Container>
  );
}
