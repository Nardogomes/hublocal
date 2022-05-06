import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "./style";

interface ShowTicketsProps {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  owner: string;
  tec_ticket: string;
  status: string;
  place: string;
}

export function ShowTickets() {
  const [tickets, setTickets] = useState<ShowTicketsProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/allticket")
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <h1>Tickets Cadastratados</h1>

        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Data criação</th>
              <th>Última atualização</th>
              <th>Proprietário</th>
              <th>Técnico responsável</th>
              <th>Status</th>
              <th>Local</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(ticket.createdAt)
                  )}
                </td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(ticket.updatedAt)
                  )}
                </td>
                <td>{ticket.owner}</td>
                <td>{ticket.tec_ticket}</td>
                <td>{ticket.status}</td>
                <td>{ticket.place}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/local">
          <button>+ Adicionar local</button>
        </Link>

        <Link id="dashboard" to="/dashboard">
          <button>Voltar para o início</button>
        </Link>
      </Content>
    </Container>
  );
}
