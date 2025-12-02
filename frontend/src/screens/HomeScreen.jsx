import { Card, Button, Row, Col, Badge, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";
import teamData from "../data/teamData";

export default function HomeScreen() {
  const previewMenu = menuData.slice(0, 3);
  const previewTeam = teamData.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <Row className="align-items-center g-4 mb-4">
        <Col md={7}>
          <h1 className="display-6 fw-bold mb-2">Sison Eatery</h1>
          <p className="text-muted mb-3">
            Affordable lutong-bahay meals and snacks. Check our weekly menu before you order.
          </p>

          <Stack direction="horizontal" gap={2} className="flex-wrap">
            <Button as={Link} to="/menu" variant="primary">
              View Weekly Menu
            </Button>
            <Button as={Link} to="/about" variant="outline-primary">
              About Us
            </Button>
            <Badge bg="warning" text="dark" className="ms-0">
              Home-made food
            </Badge>
          </Stack>

          <div className="mt-3 text-muted small">
            📍 SM City Telabastagan (Mall Canteen) • San Fernando, Pampanga
          </div>
        </Col>

        <Col md={5}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="/image/logo.jpg"
                  alt="Sison Eatery Logo"
                  width="64"
                  height="64"
                  style={{ borderRadius: 14, objectFit: "cover" }}
                />
                <div>
                  <div className="fw-semibold">What to expect</div>
                  <div className="text-muted small">
                    • Weekly menu posters<br />
                    • Mobile-friendly viewing<br />
                    • Fast navigation (SPA)
                  </div>
                </div>
              </div>

              <hr className="my-3" />

              <div className="d-flex justify-content-between align-items-center">
                <div className="text-muted small">
                  Need help ordering?
                </div>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  href="https://facebook.com/profile.php?id=100092602323538"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message us on FB
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* HIGHLIGHTS */}
      <Row className="g-3 mb-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="fw-semibold mb-1">Daily Choices</div>
              <div className="text-muted small">
                Breakfast, lunch, and snacks — updated for the whole week.
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="fw-semibold mb-1">Budget Friendly</div>
              <div className="text-muted small">
                Sulit meals that fit your day-to-day cravings.
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="fw-semibold mb-1">Easy to Browse</div>
              <div className="text-muted small">
                Click a menu card and zoom in to read clearly.
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* MENU PREVIEW */}
      <div className="d-flex justify-content-between align-items-end mb-2">
        <div>
          <h2 className="h4 fw-bold mb-0">This Week’s Menu</h2>
          <div className="text-muted small">Preview of the first 3 days</div>
        </div>
        <Button as={Link} to="/menu" variant="link" className="text-decoration-none">
          View all →
        </Button>
      </div>

      <Row className="g-3 mb-4">
        {previewMenu.map((item) => (
          <Col key={item.id} xs={12} md={4}>
            <Card className="shadow-sm h-100">
              <Card.Header className="fw-semibold">{item.day}</Card.Header>
              <Card.Body>
                <img
                  src={item.image}
                  alt={`${item.day} menu`}
                  className="img-fluid rounded"
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* TEAM PREVIEW */}
      <div className="mb-2">
        <h2 className="h4 fw-bold mb-0">Our Team</h2>
        <div className="text-muted small">Meet the people behind Sison Eatery</div>
      </div>

      <Row className="g-3 mb-4">
        {previewTeam.map((m) => (
          <Col key={m.id} xs={12} md={4}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="fw-semibold">{m.name}</div>
                <div className="text-muted small">{m.role || "Team Member"}</div>
                <div className="mt-2 text-muted small">
                  Helping prepare and serve home-made meals daily.
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* CONTACT STRIP */}
      <Card className="shadow-sm border-0 bg-light">
        <Card.Body className="p-4">
          <Row className="align-items-center g-3">
            <Col md={8}>
              <div className="fw-semibold">Contact & Orders</div>
              <div className="text-muted small">
                Phone: <a href="tel:09763762340">0976 376 2340</a> • Email:{" "}
                <a href="mailto:sisoneatery@gmail.com">sisoneatery@gmail.com</a> • Facebook:{" "}
                <a
                  href="https://facebook.com/profile.php?id=100092602323538"
                  target="_blank"
                  rel="noreferrer"
                >
                  SisonEatery
                </a>
              </div>
            </Col>
            <Col md={4} className="text-md-end">
              <Button
                variant="primary"
                href="https://facebook.com/profile.php?id=100092602323538"
                target="_blank"
                rel="noreferrer"
              >
                Open Facebook Page
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
