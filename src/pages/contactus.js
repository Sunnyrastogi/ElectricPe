import React from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import "../pages/home.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
function Contactus() {
  return (
    <>
      <section className="contact-page-header pt-5 pb-5">
        <Container className="pt-5">
          <Row>
            <div className="header-text-heading pt-5 pb-5">
              <h1>Contact Us here</h1>
            </div>
          </Row>
        </Container>
      </section>
      <section className="Contact-section-main pt-5 pb-5">
        <Container className="pt-5 pb-5">
          <Row className="pt-5 pb-5">
            <Col sm={6} md={6} lg={6} className="col-sm-12 contact-sec-background pt-5  pb-5">
            <Container>
              <Row>
                
                <Col className='mt-5 pt-3' sm={12} md={12} lg={12}>
                <div>
                <div className="contact-sec-first">
                  <h3 className="contact-heading-first pt-5 pb-5">HeadQuarters Noida,India</h3>
                  <p>
                    XYZ TECHNOLOGIES PRIVATE LIMITED
                    </p>
                    <p>
                    1781, 19th Main Rd, Vanganahalli, 1st Sector,
                    HSR Layout, Bengaluru, Karnataka 560034
                  </p>
                  <span className="pb-5 pt-5">CIN – U72900KA2021PTC147664</span>

                  <p className="pt-5"><BsFillEnvelopeFill /> Support:support@electricpe.com </p>
                </div>
              </div>
                </Col>
              
              </Row>
            </Container>
             
            </Col>
            <Col sm={6} md={6} lg={6} className="col-sm-12 contact-sec-back-2 pb-3">
              <h3 className="contact-sec-heading pt-3">Contact Form</h3>
              <p className="Contact-para pt-3">Please don't hesitate to reach out for any questions you may have!</p>
              <Row>
                <Col lg={12}>
                  <Form  className='form-field'>
                    <label for="form-field-name" className="elementor-field-label mb-1">Your Name</label>
                    <input type="text" id="form-field-name" className='w-100 mb-3 elementar-input-style'></input>
                    <label for="form-field-mobile" className="elementor-field-label mb-1">	Mobile</label>
                    <input type="Number" id="form-field-mobile" className='w-100 mb-3 elementar-input-style'></input>
                    <label for="form-field-email" className="elementor-field-label mb-1">Your Email</label>
                    <input type="email" id="form-field-email" className='w-100 mb-3 elementar-input-style'></input>
                    <label for="form-field-querry" className="elementor-field-label mb-1">Ask Your Querry here</label>
                    <textarea placeholder="tell us how we can help you!!" rows={4} className='w-100 mb-3'></textarea>
                   <div className='form-button-style'>  
                    <button type="submit" method="post" className="contact-sec-last-btn" value="submit">
                      <span >Submit</span>
                    </button>
                    </div>
                
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>

  )
}

export default Contactus