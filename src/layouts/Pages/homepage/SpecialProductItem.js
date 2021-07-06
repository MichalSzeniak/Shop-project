import React from "react";
import { Card, Button } from "react-bootstrap";
// import img1 from '../../../assets/special-offer/img1.jpg'

const SpecialProductItme = ({ item }) => {
  console.log(item.img)
  return (
    <div className="specialOffer__item">
      <Card>
        <Card.Img className="cardImg" variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price} zł</Card.Text>
          <Button variant="primary">Dodaj do koszyka</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SpecialProductItme;
