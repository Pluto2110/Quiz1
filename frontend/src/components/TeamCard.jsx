import { Card } from "react-bootstrap";

export default function TeamCard({ name, role, desc }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="mb-1">{name}</Card.Title>
        <Card.Subtitle className="text-muted mb-3">{role}</Card.Subtitle>
        <Card.Text className="mb-0">{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}
