import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddFood from "./AddFood";
import FoodsList from "./FoodsList";
import Navb from "./Essentials/Navbar";

function Dashboard() {
  const [foodId, setFoodId] = useState("");

  const getFoodIdHandler = (id) => {
    console.log("The ID of the document to be edited: ", id);
    setFoodId(id);
  };

  return (
    <>
     <Navb/>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddFood id={foodId} setFoodId={setFoodId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <FoodsList getFoodId ={getFoodIdHandler} isHotel={true} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
