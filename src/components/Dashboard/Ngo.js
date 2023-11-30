import { Container, Row, Col } from "react-bootstrap";
import Navb from "./Essentials/Navbar";
import FoodsList from "./FoodsList";

function Ngo() {
  return (
    <>
      <Navb />

      <Container style={{ width: "400px" }}>
      <h2 className="text-center mt-5">NGO</h2>
        <p className="text-center mb-4">Welcome to the NGO's Dashboard. Here, you can manage information related to NGO activities.</p>
      </Container>
      <Container>
        <Row>
          <Col>
            <FoodsList isNgo = {true} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Ngo;
