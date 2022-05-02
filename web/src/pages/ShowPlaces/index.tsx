import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "../ShowPlaces/style";

interface ShowPlacesProps {
  id: string;
  name: string;
  address: string;
}

export function ShowPlaces() {
  const [places, setPlaces] = useState<ShowPlacesProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/alllocation")
      .then((response) => response.json())
      .then((data) => setPlaces(data));
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
              <th>Endereço</th>
            </tr>
          </thead>

          <tbody>
            {places.map((place) => (
              <tr key={place.id}>
                <td>{place.name}</td>
                <td>{place.address}</td>
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
