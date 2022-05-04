import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "../ShowPlaces/style";

interface ShowPlacesProps {
  id: string;
  name: string;
  address: {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  };
}

export function ShowPlaces() {
  const [places, setPlaces] = useState<ShowPlacesProps[]>([]);

  const hadleData = (data: any) => {
    const mapper = data.map((item: any) => {
      return {
        ...item,
        address: JSON.parse(item.address),
      };
    });

    setPlaces(mapper);
  };

  useEffect(() => {
    fetch("http://localhost:3333/alllocation")
      .then((response) => response.json())
      .then((data) => hadleData(data));
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <h1>Locais Cadastratados</h1>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CEP</th>
              <th>logradouro</th>
              <th>bairro</th>
              <th>localidade</th>
              <th>uf</th>
            </tr>
          </thead>

          <tbody>
            {places.map((place) => (
              <tr key={place.id}>
                <td>{place.name}</td>
                <td>{place.address.cep}</td>
                <td>{place.address.logradouro}</td>
                <td>{place.address.bairro}</td>
                <td>{place.address.localidade}</td>
                <td>{place.address.uf}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/local">
          <button>+ Adicionar local</button>
        </Link>
      </Content>
    </Container>
  );
}
