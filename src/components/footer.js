import React from 'react';
import "./footer.css";
import eplogo from '../assets/images/EP-logowhite.png';
import { Container, Col, Row } from "react-bootstrap";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin
} from "react-icons/bs";
function Footer() {
  return (
    // desktop section//
    <>
      <section className="footer-background-head py-5 pt-5">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={4}>
              <div>
                <a href="https://electricpe.com">
                  <img src={eplogo} alt="electric-pe" className="electric-logo" />
                </a>
              </div>
              <div>
                <p className="app-color">Download the ElectricPe App now!</p>
              </div>
              <div className="app-icons mx-4">
                <div>
                  <a className="elementor-icon" href="https://apps.apple.com/in/app/electricpe/id1612648568">
                    <AiFillApple />
                  </a>
                </div>
                <div className="pipe-icon mt-4 mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2"
                    height="37" viewBox="0 0 2 37" fill="none">
                    <path d="M1 0.5V36.5" stroke="white" stroke-linecap="round">
                    </path></svg>
                </div>
                <div>
                  <a className="elementor-icon" href="https://apps.apple.com/in/app/electricpe/id1612648568">
                    <FaGooglePlay />
                  </a>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={2} className="footer-mid-column-2">
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className="footer-list-item">
                <div>
                  <ul >
                    <li className="mx-3">
                      Products
                    </li>
                    <li className="mx-3">
                      ElectricPe App
                    </li>
                    <li className="mx-3" >
                      ElectricPe CMS
                    </li>
                  </ul>

                </div>
                <div>
                  <ul >
                    <li className="mr-3" >
                      Company
                    </li>
                    <li className="mr-3">
                      Carrers
                    </li>
                    <li className="mr-3">
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="dashed-line">
      </div>
      <section className="footer-background-head pt-3 pb-3">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={4} className="footer-mid-column-1">
              <div className="app-color foot-mid-left">
                <h3>Registered Office Address</h3>
                <p>
                  WATTAPP TECHNOLOGIES PRIVATE LIMITED ,
                  1781, 19th Main Rd, Vanganahalli, 1st Sector,
                  HSR Layout, Bengaluru, Karnataka 560034
                  CIN - U72900KA2021PTC147664
                  contact@electricpe.com
                </p>
              </div>
            </Col>
            <Col  sm={12} md={12} lg={2} className="col-lg-2 foot-no"></Col>
            <Col sm={12} md={12} lg={6} className="footer-mid-column-3">
              <div className="app-color widget">
                <p>KEEP IN TOUCH</p>
              </div>
              <div className="widget social-list mb-3">
                <span className="mx-3">
                  <BsTwitter />
                </span>
                <span className="mx-3">
                  <BsFacebook />
                </span>
                <span className="mx-3">
                  <BsInstagram />
                </span>
                <span className="mx-3">
                  <BsLinkedin />
                </span>
              </div>
              <div className="elementar-widgets app-color widget ">
                <div className="mx-2 widget-style">
                  <a href="">
                    <p>Privacy Policy
                    </p>
                  </a>
                </div>
                <div className="widget-style">
                  <a href="">
                    <p>Terms of the Service
                    </p>
                  </a>
                </div>
              </div>
              <div className="elemmet-widget-container app-color widget">
                © 2023 All rights Reserved. Wattapp Technologies
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <section className="footer-last-sec pt-5 pb-5">
        <Container>
          <Row>
            <Col sm={12} md={3} lg={3} className="col-12 footer-widget-last">
              <ul className="p-0">
                <li className="mb-3">EV Charging Stations in Bengaluru</li>
                <li className="mb-3">EV Charging Stations in Jaipur</li>
                <li className="mb-3">EV Charging Stations in Chennai</li>
                <li className="mb-3">EV Charging Stations in Chandigarh</li>
              </ul>
            </Col>
            <Col sm={12} md={3} lg={3} className="col-12  footer-widget-last">
              <ul className="p-0">
                <li className="mb-3">EV Charging Stations in Ghaziabad</li>
                <li className="mb-3">EV Charging Stations in Gurugram</li>
                <li className="mb-3">EV Charging Stations in Delhi</li>
                <li className="mb-3">EV Charging Stations in Hyderabad</li>
              </ul>
            </Col>
            <Col sm={12} md={3} lg={3} className="col-12  footer-widget-last">
              <ul className="p-0">
                <li className="mb-3">EV Charging Stations in Ahemdabad</li>
                <li className="mb-3">EV Charging Stations in Bhopal</li>
                <li className="mb-3">EV Charging Stations in Udaipur</li>
                <li className="mb-3">EV Charging Stations in Pune</li>
              </ul>
            </Col>

            <Col sm={12} md={3} lg={3} className="col-12 footer-widget-last">
              <ul className="p-0">
                <li className="mb-3">EV Charging Stations in Patna</li>
                <li className="mb-3">EV Charging Stations in Noida</li>
                <li className="mb-3">EV Charging Stations in Mumbai</li>
                <li className="mb-3">EV Charging Stations in Kolkata</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Footer;