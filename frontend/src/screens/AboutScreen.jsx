import { Col, Container, Row } from "react-bootstrap";
import teamData from "../data/teamData";
import TeamCard from "../components/TeamCard";

export default function AboutScreen() {
  return (
    <Container>
      <h2 className="mb-2">About Sison Eatery</h2>
      <p className="text-muted">
        Sison Eatery is a small local food business that shares weekly menus as images.
        This SPA organizes the menu by day and shows basic business info and team members.
      </p>

      <h3 className="mt-4 mb-3">Team</h3>
      <h3 className="mt-4 mb-2">Contact</h3>

        <ul className="text-muted">
            <li>
                Phone: <a href="tel:09763762340">0976 376 2340</a>
            </li>
            <li>
             Email: <a href="mailto:sisoneatery@gmail.com">sisoneatery@gmail.com</a>
            </li>
            <li>
                Facebook:{" "}
            <a href="https://facebook.com/profile.php?id=100092602323538"  target="_blank" rel="noreferrer" >
                facebook.com/...SisonEatery
            </a>
            </li>
        </ul>
      <Row className="g-3">
        {teamData.map((m) => (
          <Col key={m.id} md={4}>
            <TeamCard name={m.name} role={m.role} desc={m.desc} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
