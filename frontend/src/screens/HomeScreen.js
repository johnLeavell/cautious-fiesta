import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h1>Imperfect Supply List</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} lx={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;