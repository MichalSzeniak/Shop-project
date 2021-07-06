import React from "react";
import { Container, CardGroup, Row } from "react-bootstrap";
import SpecialProductItem from "./SpecialProductItem";
import "../../../scss/specialOffer.scss"

const SpecialOffer = ({ specialOffer }) => {
  return (
      <Container>
        <div className="specialOffer__box">
          <h2 className="specialOffer__title">Special Offer</h2>
        <CardGroup>
          <Row md={1} lg={3}>
            {specialOffer && specialOffer.map((item) => (
              <SpecialProductItem key={item.id} {...{ item }} />
            ))}
          </Row>
        </CardGroup>
        </div>
      </Container>
  );
};

export default SpecialOffer;
