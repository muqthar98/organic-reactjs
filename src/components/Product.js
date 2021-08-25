import React,{useEffect} from "react";
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../redux/actions/productActions'
import "./Product.css";
import { Row, Col, Container, Card,Spinner,Alert } from "react-bootstrap";

function Product() {

  const dispatch = useDispatch()

  const productList = useSelector(state=> state.productList)
  const {loading,error,products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container>
      <Row>
        {loading ? <Spinner animation="border" variant="dark"/> : error ? <Alert variant='danger'>
          There is error in loading data
        </Alert> :
  (
    <>
      {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={6} xl={4}>
            <img
              className="image2"
              src={product.image}
              alt=""
              style={{ width: "200px", height: "200px", marginTop: "50px" }}
            />
            <Card.Body>
              <Link to="/product/:id" className="link-dark">
              <Card.Text>
                <strong style={{ fontSize: "15px" }}>{product.title}</strong>
              </Card.Text>
              </Link>
              <Card.Text>
                <h5 style={{fontSize:'14px'}}>₹{product.price}</h5>
              </Card.Text>
            </Card.Body>
          </Col>
         ))}
      </>   
      )}
      </Row>
    </Container>
  );
}

export default Product;
