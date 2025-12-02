import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="mt-auto py-3 border-top">
      <Container className="text-center">
        <small className="text-muted">
            <img src="/image/logo.jpg" alt="Sison Eatery Logo"  width="56"  height="56" style={{ objectFit: "contain", borderRadius: "12px" }}/>

          Sison Eatery • Rodulfo , Aron• 2023
          
        </small>
        
      </Container>
    </footer>
  );
}
