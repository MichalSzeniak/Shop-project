import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "../../../scss/newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row xs={1} md={2}>
          <h2>ZAPISZ SIĘ DO NEWSLETTERA</h2>
          <Form inline className="justify-content-center">
              <Form.Control required type="email" placeholder="Email" />
              <Button variant="primary" type="submit">
                ZAPISZ
              </Button>
          </Form>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
