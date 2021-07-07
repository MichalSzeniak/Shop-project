import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/counter/icon1.png"
import icon2 from "../../../assets/counter/icon2.png"
import icon3 from "../../../assets/counter/icon3.png"
import '../../../scss/counter.scss'

const Counters = () => (
  <section className="counters">
    <h2>NASZE LICZBY</h2>
    <Container>
    <Row md={1} lg={3}>
    <article className="counter__box">
      <img src={icon1} alt="" />
      <CountUp end={120621} redraw={false}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span className="counter" ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
    <h3>SPRZEDANYCH PRODUKTÓW</h3>
      </article>
      <article className="counter__box">
      <img src={icon2} alt="" />
      <CountUp end={16} redraw={false}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span className="counter" ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
    <h3>OTWARTYCH SKLEPÓW</h3>
      </article>
      <article className="counter__box">
      <img src={icon3} alt="" />
      <CountUp end={50000} redraw={false}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span className="counter" ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
    <h3>ZADWOLONYCH KLIENTÓW</h3>
      </article>
      </Row>
    </Container>
  </section>
);

export default Counters;