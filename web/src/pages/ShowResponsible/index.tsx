import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "../ShowResponsible/style";

interface ShowResponsibleProps {
  id: string;
  name: string;
  contact: string;
  address: {
    cep: string;
    logradouro: string;
    bairro: string;
    numero: string;
    localidade: string;
    uf: string;
  };
}

export function ShowResponsible() {
  const [responsibles, setResponsibles] = useState<ShowResponsibleProps[]>([]);

  const hadleData = (data: any) => {
    const mapper = data.map((item: any) => {
      return {
        ...item,
        address: JSON.parse(item.address),
      };
    });

    setResponsibles(mapper);
  };

  useEffect(() => {
    fetch("http://localhost:3333/allresponsible")
      .then((response) => response.json())
      .then((data) => hadleData(data));
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
              <th>CEP</th>
              <th>logradouro</th>
              <th>bairro</th>
              <th>Nº</th>
              <th>localidade</th>
              <th>uf</th>
            </tr>
          </thead>

          <tbody>
            {responsibles.map((responsible) => (
              <tr key={responsible.id}>
                <td>{responsible.name}</td>
                <td>{responsible.contact}</td>
                <td>{responsible.address.cep}</td>
                <td>{responsible.address.logradouro}</td>
                <td>{responsible.address.bairro}</td>
                <td>{responsible.address.numero}</td>
                <td>{responsible.address.localidade}</td>
                <td>{responsible.address.uf}</td>
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
