import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1 className="title1 mt-3 ">The Organic Choice</h1>
      <Container className="container">
        <Row>
          <Col sm={12} md={4} lg={3} xl={1} style={{ width: "100%" }}>
            <img
              style={{ marginTop: "20px" }}
              className="img image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/organic1_360x.jpg?v=1609211039"
              alt=""
            />
            <img
              style={{ marginTop: "20px" }}
              className="img image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/organic_360x.jpg?v=1609211200"
              alt=""
            />
            <img
              style={{ marginTop: "20px" }}
              className="img image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/organic2_360x.jpg?v=1609211219"
              alt=""
            />
          </Col>
        </Row>
        <hr />
      </Container>

      <div>
        <h1 className="title1 mt-5">Best Offers</h1>
      </div>

      <Container className="bestoffer">
        <Row>
          <Col>
            <img
              style={{ width: "600px", marginRight: "5px" }}
              className="image5"
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1607439289_immu_webmini.jpg"
              alt=""
            />
            <img
              style={{ width: "600px" }}
              className="image6"
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1613668788_min33_webmini.jpg"
              alt=""
            />
          </Col>
        </Row>
        <hr />
      </Container>

      <div>
        <h1 className="title2 mt-5">Our Fresh Picks</h1>
      </div>

      <Container className="container2">
        <img
          className="image3"
          style={{ marginTop: "30px" }}
          src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic5_360x.png?v=1613979883"
          alt=""
        />
        <img
          className="image3"
          style={{ marginTop: "30px" }}
          src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic4_360x.png?v=1613979490"
          alt=""
        />
        <img
          className="image3"
          style={{ marginTop: "30px" }}
          src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic2_360x.png?v=1613978391"
          alt=""
        />
        <img
          className="image3"
          style={{ marginTop: "30px" }}
          src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic1_360x.png?v=1613979843"
          alt=""
        />
        <img
          className="image3"
          style={{ marginTop: "30px" }}
          src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic3_360x.png?v=1613979050"
          alt=""
        />
        <img
          className="image3"
          style={{ marginTop: "30px" }}
          src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic7_360x.png?v=1613978266"
          alt=""
        />
        <img
          className="image3"
          style={{ marginTop: "30px" }}
          src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic8_360x.png?v=1613979125"
          alt=""
        />
        <img
          className="image3"
          style={{ marginTop: "30px" }}
          src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic6-1_360x.png?v=1613979000"
          alt=""
        />
      </Container>

      <div className="home_row3"></div>

      <div className="button">
        <Link to="/products">
          <Button classname="btn btn-dark productbutton">
            View All Products
          </Button>
        </Link>
      </div>

      <hr />

      <h1 className="title3 mt-3">Our Latest News</h1>
      <Container className="container">
        <Row>
          <Col sm={12} md={4} lg={3} xl={1} style={{ width: "100%" }}>
            <img
              style={{ marginTop: "30px" }}
              className="img image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/articles/blog-organic1_360x.jpg?v=1613633098"
              alt=""
            />
            <img
              style={{ marginTop: "30px" }}
              className="img image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/articles/blog-organic-square-2_360x.jpg?v=1613637594"
              alt=""
            />
            <img
              style={{ marginTop: "30px" }}
              className="img image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/articles/blog-organic-square_360x.jpg?v=1613637579"
              alt=""
            />
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}
