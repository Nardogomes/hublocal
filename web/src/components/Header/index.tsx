import { Link } from "react-router-dom";
import { Container, Content } from "./style";
import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Content>
        <Link to={"/dashboard"}>
          <img src={Logo} alt="logomarca da empresa Hub Local" />
        </Link>
        <span>
          Transforme sua <strong>empresa</strong> numa <strong>máquina</strong>{" "}
          de atrair <strong>clientes</strong>
        </span>
      </Content>
    </Container>
  );
}
