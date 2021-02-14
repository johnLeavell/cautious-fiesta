import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  console.log(product);
  return (
    <Card className="my-1 p-1 rounded">
      <Link to={`/product/${product._id}`}>
        <Image src={product.image} variant="top" thumbnail fluid />
      </Link>
      <span></span>
      <Card.Body>
          <Card.Title as="div">
            <strong className='text-primary'>Bank Name: {product.bankName}</strong>
          </Card.Title>

        <Card.Text as="div">
          <div className="my-1">Card ID: {product.cardId}</div>
        </Card.Text>

        <Card.Text as="div">
          <div className="my-1">Date Opened: {product.dateOpened}</div>
        </Card.Text>

        <Card.Text as="div">
          <div className="my-1">Credit Limit: ${product.creditLimit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        </Card.Text>
        
        <Card.Text as="div">
          <div className="my-1">Availabile: {product.availability}</div>
        </Card.Text>

      </Card.Body>
      
    </Card>
  );
};

export default Product;
