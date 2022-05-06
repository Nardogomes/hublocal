import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

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

interface TicketsProps {
  id: string;
  title: string;
}

export function Dashboard() {
  const [companies, setCompanies] = useState<CompaniesProps[]>([]);
  const [responsibles, setResponsibles] = useState<ResponsiblesProps[]>([]);
  const [places, setPlaces] = useState<PlacesProps[]>([]);
  const [tickets, setTickets] = useState<TicketsProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/allcompany")
      .then((response) => response.json())
      .then((data) => setCompanies(data));
  }, [companies]);

  useEffect(() => {
    fetch("http://localhost:3333/allresponsible")
      .then((response) => response.json())
      .then((data) => setResponsibles(data));
  }, [responsibles]);

  useEffect(() => {
    fetch("http://localhost:3333/alllocation")
      .then((response) => response.json())
      .then((data) => setPlaces(data));
  }, [places]);

  useEffect(() => {
    fetch("http://localhost:3333/allticket")
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <div className="companies">
          <h1>Empresas</h1>
          <ul>
            {companies.length === 0
              ? "Não há empresas cadastradas"
              : companies.map((company) => (
                  <li key={company.id}>{company.name}</li>
                ))}
          </ul>
          <Link to={"/empresas-cad"}>
            <button>+ Detalhes</button>
          </Link>
        </div>

        <div className="responsibles">
          <h1>Responsáveis</h1>
          <ul>
            {responsibles.length === 0
              ? "Não há responsáveis cadastrados"
              : responsibles.map((responsible) => (
                  <li key={responsible.id}>{responsible.name}</li>
                ))}
          </ul>
          <Link to={"/responsaveis-cad"}>
            <button>+ Detalhes</button>
          </Link>
        </div>

        <div className="places">
          <h1>Locais</h1>
          <ul>
            {places.length === 0
              ? "Não há locais cadastrados"
              : places.map((place) => <li key={place.id}>{place.name}</li>)}
          </ul>
          <Link to={"/locais-cad"}>
            <button>+ Detalhes</button>
          </Link>
        </div>

        <div className="tickets">
          <h1>Tickets</h1>
          <ul>
            {tickets.length === 0
              ? "Não há tickets cadastrados"
              : tickets.map((ticket) => (
                  <li key={ticket.id}>{ticket.title}</li>
                ))}
          </ul>
          <Link to={"/empresas-cad"}>
            <button>+ Detalhes</button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
