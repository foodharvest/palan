import { Container, Row, Col } from "react-bootstrap";
import Navb from "./Essentials/Navbar";
import FoodsList from "./FoodsList";
import AddFood from "./Composter/AddComposter";
import ComposterList from "./Composter/ComposterList";
import { useState } from "react";

function Composter() {

  const [composterId, setComposterId] = useState("");

  const getComposterIdHandler = (id) => {
    console.log("The ID of the document to be edited: ", id);
    setComposterId(id);
  };
  return (
    <>
      <Navb />
      <Container>
        <h2 className="text-center mt-5">Composter</h2>
        <p className="text-center mb-4">Welcome to the Composter's Dashboard. Here, you can manage information related to composting.</p>
      </Container>
      {/* <Container >
        <Row>
          <Col>
            <AddFood id={composterId} setComposterId={setComposterId} />
          </Col>
        </Row>
      </Container> */}
      <Container className="my-5">
        <h4 className="text-center text-white mt-5 p-3 bg-dark rounded ">Food List</h4>
        <Row>
          <Col>
            <FoodsList isComposter={true} />
          </Col>
        </Row>
      </Container>
      {/* <Container className="my-5">
        <h4 className="text-center text-white mt-5 p-3 bg-dark rounded ">Composter List</h4>
        <Row>
          <Col>
            <ComposterList getComposterId ={getComposterIdHandler} />
          </Col>
        </Row>
      </Container> */}
    </>
    
  );
}
export default Composter;


