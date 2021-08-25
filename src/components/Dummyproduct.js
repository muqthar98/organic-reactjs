import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { products } from "../constants/product";
import Product from "./Product";

const Dummyproduct = () => {

  return (
    <Container>
      <Row>
        <h1 className="mt-5">Products</h1>
        <Product />
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={6} xl={4}>
            <img
              className="image2"
              src={product.image}
              alt=""
              style={{ width: "200px", height: "200px", marginTop: "50px" }}
            />
            <Card.Body>
              <Card.Text style={{ marginTop: "20px" }}>
                <strong style={{ fontSize: "25px" }}>{product.title}</strong>
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

export default Dummyproduct;
