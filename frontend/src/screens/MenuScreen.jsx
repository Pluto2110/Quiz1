import { Row, Col } from "react-bootstrap";
import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";

export default function MenuScreen() {
  return (
    <>
      <h1 className="mb-1">Weekly Menu</h1>
      <p className="text-muted">Menus are displayed using uploaded images.</p>

      <Row className="g-3">
        {menuData.map((item) => (
          <Col key={item.id} xs={12} sm={6} lg={4}>
            <MenuCard day={item.day} image={item.image} />
          </Col>
        ))}
      </Row>
    </>
  );
}
