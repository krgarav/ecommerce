import React from "react";
import { Card, Image,ListGroup,Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Items from "../Items/Items";

const Product = () => {
  const params = useParams();
  const item = Items.filter((item) => {
    return item.title === params.productId;
  });
 
  return (<>
  
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Image
          src="https://www.linkpicture.com/q/f65100dcc2dae5079cfa0303634de8bb.jpg"
          thumbnail
          width="200px"
          height="200px"
        />
        <Image
          src="https://www.linkpicture.com/q/images_306.jpg"
          thumbnail
          width="200px"
          height="200px"
        />
        <Image
          src="https://www.linkpicture.com/q/0_ftINkvd1bTeK0y0.jpg"
          thumbnail
          width="500px"
          height="200px"
        />
        <Image
          src="https://www.linkpicture.com/q/2dgsUd3Yi8yUeccvoAdAYD-320-80.jpg"
          thumbnail
          width="200px"
          height="200px"
        />
        <Image
          src="https://www.linkpicture.com/q/download_518.jpg"
          thumbnail
          width="200px"
          height="200px"
        />
      </div>
      <Image height="500px" width="300px" src={item[0].imageUrl} />
      <Card className="text-center">
        <Card.Header>ITEM</Card.Header>
        <Card.Body>
          <Card.Title>{item[0].title}</Card.Title>
          <h2>Rs {item[0].price}/-</h2>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
         
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </div>
    <h1>Product Reviews</h1>
    <ListGroup as="ul" >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Very nice product</div>
          Satisfied by the product very much
        </div>
        <Badge bg="primary" pill>
          4.5
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Amazing but not upto the mark</div>
          
        </div>
        <Badge bg="primary" pill>
          4.2
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Nice but need some improvement</div>
          recommend to others.
        </div>
        <Badge bg="primary" pill>
          3.6
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    </>
  );
};

export default Product;
