import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { bookDataService } from "../../services/service";
import Cookies from "js-cookie";

const FoodsList = ({ getFoodId, isComposter, isHotel, isNgo }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await bookDataService.getAllBooks();
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await bookDataService.deleteBook(id);
    getBooks();
  };

  return (

    <>
    <div className="d-flex flex-wrap justify-content-between mb-2">
        <Button variant="dark edit p-2" onClick={getBooks}>
          Refresh List
        </Button>
      </div>
    
    <div className="d-flex flex-wrap">
      {books.map((doc, index) => (
        <Card key={doc.id}  className="m-2" style={{ width: "18rem", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{doc.hotelName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{doc.location}</Card.Subtitle>
            <Card.Text>
              Email: {doc.email}
              <br />
              Phone-no: {doc.phoneNum}
              <br />
              {isHotel && (
                <>
                  Edible-Food: {doc.edibleFood}
                  <br />
                  Non-Edible-Food: {doc.nonEdibleFood}
                  <br />
                </>
              )}
              {isComposter && <>Non-Edible-Food: {doc.nonEdibleFood}<br /></>}
              {isNgo && <>Edible-Food: {doc.edibleFood}<br /></>}
              Status: {doc.status}
            </Card.Text>
            {getFoodId && (
              doc.email === Cookies.get("userEmail") ? (
                <>
                  <Button
                    variant="success"
                    className="edit m-2"
                    onClick={(e) => getFoodId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete m-2"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                "---"
              )
            )}
            {!getFoodId && (
              <>
                <Button variant="success" className="edit m-2">
                  <a className="text-white edit m-2" href={`tel:${doc.phoneNum}`}>
                    Call
                  </a>
                </Button>
                <Button variant="success" className="edit m-2">
                  <a className="text-white" href={`mailto:${doc.email}`}>
                    Mail
                  </a>
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
};

export default FoodsList;
