import React from 'react';
import "../pages/home.css";
import {Container ,Row} from "react-bootstrap";
function Modify() {
  return (
    <section className="About-page-header pt-5 pb-5">
    <Container className="pt-5 ">
      <Row>
        <div className="header-text-heading pt-5 pb-5">
          <h2>Modify here</h2>
        </div>
      </Row>
    </Container>
  </section>
  )
}

export default Modify;