import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import {composterDataService} from "../../../services/service";
import Cookies from "js-cookie";

const AddComposter = ({ id, setComposterId }) => {
  const [composterName, setComposterName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [composeFertilizer, setComposeFertilizer] = useState("");
  const [status, setStatus] = useState("Available");
  const [kg, setKg] = useState(0);
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (composterName === "" || location === "" || phoneNum ==="" || composeFertilizer ==="") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }

    const email = await Cookies.get("userEmail")
    console.log(email);
    const newComposter = {
      composterName,
      location,
      email,
      phoneNum,
      composeFertilizer,      
      status,
      kg
    };


    try {
      if (id !== undefined && id !== "") {
        await composterDataService.updateComposter(id, newComposter);
        setComposterId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await composterDataService.addComposter(newComposter);
        setMessage({ error: false, msg: "New Hotel added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setComposterName("");
    setLocation("");
    setPhoneNum("");
    setComposeFertilizer("");

  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await composterDataService.getComposter(id);
      console.log("the record is :", docSnap.data());
      setComposterName(docSnap.data().composterName);
      setLocation(docSnap.data().location);
      setPhoneNum(docSnap.data().phoneNum);
      setComposeFertilizer(docSnap.data().composeFertilizer);
      setStatus(docSnap.data().status);
      setKg(docSnap.data().kg);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id ]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">1</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Composter Name"
                value={composterName}
                onChange={(e) => setComposterName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">2</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">4</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Phone-No"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">5</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Add Compost Fertilizer"
                value={composeFertilizer}
                onChange={(e) => setComposeFertilizer(e.target.value)}
              />
            </InputGroup>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">6</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Add Composition in Kg"
                value={kg}
                onChange={(e) => setKg(e.target.value)}
              />
            </InputGroup>
          </Form.Group>


          

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddComposter;