import React from "react";
import { Container } from "react-bootstrap";
import "../../../scss/AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="aboutUs">
      <Container>
        <h2 className="aboutUs__header">O NAS</h2>
        <p className="aboutUs__paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          explicabo corporis provident pariatur omnis accusantium totam atque
          quia qui. Culpa dicta deserunt nam, quasi quisquam assumenda numquam
          harum praesentium delectus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis ab maiores autem explicabo dolores
          eligendi.
        </p>
      </Container>
    </section>
  );
};

export default AboutUs;
