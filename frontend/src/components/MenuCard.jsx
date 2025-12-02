import { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

export default function MenuCard({ day, image }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="shadow-sm h-100">
        <Card.Header className="fw-semibold d-flex justify-content-between align-items-center">
          <span>{day}</span>
          <Button variant="outline-primary" size="sm" onClick={() => setShow(true)}>
            View
          </Button>
        </Card.Header>

        <Card.Body>
          <img
            src={image}
            alt={`${day} menu`}
            className="img-fluid rounded menu-thumb"
            style={{ cursor: "zoom-in" }}
            onClick={() => setShow(true)}
          />
          <div className="text-muted mt-2">
            <small>Tap/click the image to zoom.</small>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{day} Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <img src={image} alt={`${day} menu`} className="img-fluid w-100" />
        </Modal.Body>
      </Modal>
    </>
  );
}
