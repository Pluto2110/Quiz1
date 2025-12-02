import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import AboutScreen from "./screens/AboutScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="py-4 flex-grow-1">
        <Container fluid="lg">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
