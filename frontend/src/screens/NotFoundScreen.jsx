import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFoundScreen() {
  return (
    <Container className="text-center py-5">
      <h2 className="mb-2">404 - Page Not Found</h2>
      <p className="text-muted">The page you requested doesn’t exist.</p>
      <Button as={Link} to="/" variant="primary">
        Go Home
      </Button>
    </Container>
  );
}
