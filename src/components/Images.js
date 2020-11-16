import React from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
// import Logo from “./logo.png”;

const Images = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Images;
