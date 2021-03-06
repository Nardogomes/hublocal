import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { Company } from "./pages/Company";
import { ShowCompanies } from "./pages/ShowCompanies";
import { Responsible } from "./pages/Responsible";
import { ShowResponsible } from "./pages/ShowResponsible";
import { Place } from "./pages/Place";
import { ShowPlaces } from "./pages/ShowPlaces";
import { Ticket } from "./pages/Ticket";
import { ShowTickets } from "./pages/ShowTickets"

import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const theme = {
    primary: "#322153",
    secondary: "#6C63FF",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#FFF",
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/empresas-cad" element={<ShowCompanies />} />
          <Route path="/responsavel" element={<Responsible />} />
          <Route path="/responsaveis-cad" element={<ShowResponsible />} />
          <Route path="/local" element={<Place />} />
          <Route path="/locais-cad" element={<ShowPlaces />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/tickets-cad" element={<ShowTickets />} />
        </Routes>
      </Router>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}
