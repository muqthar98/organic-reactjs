import React from "react";
import "./Product.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import products from "../data";

function Product({}) {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={6} xl={4}>
            <img
              className="image2"
              src={product.image}
              alt=""
              style={{ width: "300px" }}
            />
            <Card.Body>
              <Card.Text>
                <strong style={{ fontSize: "25px" }}>{product.name}</strong>
              </Card.Text>
              <Card.Text>
                <h5>₹{product.price}</h5>
              </Card.Text>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
