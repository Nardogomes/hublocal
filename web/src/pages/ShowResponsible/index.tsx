import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "../ShowPlaces/style";

interface ShowResponsibleProps {
  id: string;
  name: string;
  contact: string;
  address: string;
}

export function ShowResponsible() {
  const [responsibles, setResponsibles] = useState<ShowResponsibleProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/allresponsible")
      .then((response) => response.json())
      .then((data) => setResponsibles(data));
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <h1>Responsáveis Cadastratados</h1>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Contato</th>
              <th>Endereço</th>
            </tr>
          </thead>

          <tbody>
            {responsibles.map((responsible) => (
              <tr key={responsible.id}>
                <td>{responsible.name}</td>
                <td>{responsible.contact}</td>
                <td>{responsible.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/responsavel">
          <button>+ Adicionar local</button>
        </Link>
      </Content>
    </Container>
  );
}
