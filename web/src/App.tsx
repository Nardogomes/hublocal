import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Company } from "./pages/Company";

import { GlobalStyle } from "./styles/global";

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/empresa" element={<Company />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}
