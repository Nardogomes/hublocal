import { useState, useEffect } from "react";
import { Header} from "../../components/Header";

import { Container, Content } from "./style";

interface CompaniesProps {
  id: string;
  name: string;
}

interface ResponsiblesProps {
  id: string;
  name: string;
}

interface PlacesProps {
  id: string;
  name: string;
}

export function Dashboard() {
  const [companies, setCompanies] = useState<CompaniesProps[]>([]);
  const [responsibles, setResponsibles] = useState<ResponsiblesProps[]>([]);
  const [places, setPlaces] = useState<PlacesProps[]>([]);

  console.log(companies);
  useEffect(()=> {
    fetch("http://localhost:3333/allcompany")
      .then(response => response.json())
      .then(data => setCompanies(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/allresponsible")
      .then((response) => response.json())
      .then((data) => setResponsibles(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/alllocation")
      .then((response) => response.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <div className="companies">
          <h1>Empresas</h1>
          <ul>
            {companies.length === 0 ?
              "Não há empresasa cadastradas"
              : companies.map(company => (
                <li key={company.id}>{company.name}</li>
              ))}
          </ul>
        </div>

        <div className="responsibles">
          <h1>Responsáveis</h1>
          <ul>
            {responsibles.length === 0 ?
              "Não há responsáveis cadastrados"
              : responsibles.map(responsible => (
                <li key={responsible.id}>{responsible.name}</li>
              ))}
          </ul>
        </div>

        <div className="places">
          <h1>Locais</h1>
          <ul>
            {places.length === 0 ?
              "Não há locais cadastrados"
              : places.map(place => (
                <li key={place.id}>{place.name}</li>
              ))}
          </ul>
        </div>
      </Content>
    </Container>
  );
}
