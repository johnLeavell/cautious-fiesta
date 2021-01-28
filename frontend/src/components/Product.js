import React from 'react';
import { Card, Image } from 'react-bootstrap';

const Product = ({ product }) => {
  console.log(product);
  return (
    <Card className="my-1 p-1 rounded">
      <a href={`/product/${product._id}`}>
        <Image src={product.image} variant="top" thumbnail fluid />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>Bank Name: {product.bankName}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-1">Card ID: {product.cardId}</div>
        </Card.Text>

        <Card.Text as="div">
          <div className="my-1">Date Opened: {product.dateOpened}</div>
        </Card.Text>

        <Card.Text as="div">
          <div className="my-1">Credit Limit: ${product.creditLimit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        </Card.Text>

      </Card.Body>
      
    </Card>
  );
};

export default Product;
