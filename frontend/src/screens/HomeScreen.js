import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        '/api/products',
      );
      setProducts(data);
    };
 
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Imperfect Supply List</h1>
      <Row>
        {products.map((product) => (
          <Col xs={6} sm={12} md={4} lg={4} lx={3}>
            <Product product={product} key={product._id}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
