import React from 'react'
import "../pages/home.css";
import { Row, Container, Col } from "react-bootstrap";
import Eplogo from "../assets/images/teamEP.jpg";
import Blume from "../assets/images/blume.svg";
import GFC from "../assets/images/GFC.jpg";
import partner2 from "../assets/images/partner2.png";
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.png";
function AboutUs() {
  return (
    <>
      <section className="About-page-header pt-5 pb-5">
        <Container className="pt-5 ">
          <Row>
            <div className="header-text-heading pt-5 pb-5">
              <h2>About Us</h2>
            </div>
          </Row>
        </Container>
      </section>
      <section className="About-section-main">
        <Container fluid>
          <Row>
            <Col md={6} lg={6} className="col-sm-12 about-background">
              <div>
                <h4 className="head-elec-mob">
                  Electric<br />
                  Mobility<br />
                  For A<br />
                  Billion<br />
                  Indians
                </h4>
              </div>
            </Col>
            <Col md={6} lg={6} className="col-sm-12 about-background-2 ">
              <p>Electric Vehicle adoption can lead us to achieve a green economy
                and build a sustainable future. But until now, the lack of charging
                stations has left millions of potential users with&nbsp; ‘Range Anxiety’
                denying our cities the pure air they deserve.</p>
              <p>At ElectricPe, we are on a mission to provide smart,
                affordable, and clean Electric Mobility to a billion Indians.
                We are making a great effort to create India’s largest Electric
                Vehicle Charging Platform by collaborating with thousands of independent
                charge point operators who are providing service to a community near you.</p>
              <p>All your hassle stops here. You won’t ever need to be  concerned about
                your electric vehicle running out of charge or not being able to find a
                charging point close by.</p>
              <p><strong>Ab India Chalega ElectricPe!&nbsp;</strong></p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="pt-5 pb-5 about-section-mid">
        <h2 className="about-sec-mid">Our Team</h2>
          <Row className="border-responsive pt-5">
            <Col  sm={6} md={6} className="col-lg-45 person-border">
              <div className="per-box-sty">
                <div>
                  <img src={person1} alt="p1" className="per-img" />
                </div>
                <div>
                  <h3 className="mx-3 name-head">Avinash Sharma</h3>
                  <p className="mx-3 desig-head">CEO & COFOUNDER</p>
                </div>
              </div>
              <div>
                <p className="per-para">Avinash is an MBA from NMIMS, Mumbai, and the FICCI Young
                  Leader 2019.&nbsp;He leads our business as the Co-founder and CEO
                  at ElectricPe. He is impassioned about building a cleantech Electric
                  Mobility ecosystem and was also a country lead of multiple Mobility
                  Businesses at Ola.</p>
              </div>
            </Col>
            <Col sm={6} md={6} className="col-lg-45 person-border ">
              <div className="per-box-sty">
                <div>
                  <img src={person2} alt="p1" className="per-img" />
                </div>
                <div>
                  <h3 className="mx-3 name-head">Raghav Rohila</h3>
                  <p className=" mx-3 desig-head">COO & COFOUNDER</p>
                </div>
              </div>
              <div>
                <p className="per-para">Raghav is an MBA from IIM Kozhikode. He leads our business as th
                  e Co-founder and CPO at ElectricPe. He has worked across product, technology &amp; strategy
                  in building shared mobility, distributed platforms &amp; retail ecosystem in India &amp; UAE.
                  He is also the founder of Xyloop – Asana for Blue-collar workforce. At
                  Ola, he led new product initiatives as Chief of Staff to the COO.</p>
              </div>

            </Col>
            <Col sm={6} md={6} className="col-lg-45 person-border">
              <div className="per-box-sty">
                <div>
                  <img src={person3} alt="p1" className="per-img" />
                </div>
                <div>
                  <h3 className="mx-3 name-head">Rohit Aggrawal</h3>
                  <p className="mx-3 desig-head">CTO & COFOUNDER</p>
                </div>
              </div>
              <div>
                <p className="per-para">Rohit is a versatile, data-driven software engineer
                  for whom customers are his heart. He leads ElectricPe
                  as the CTO,
                  overlooking the full-stack offerings and developing
                  tech strategy.
                  He is a CS graduate of IIT Delhi and has 10+ years
                  of know-how with companies
                  like Yahoo, Limeroad, and
                  Udaan where he led teams
                  to develop software products from
                  scratch and scale them.</p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <h4 className="about-invester-sec pt-5">Our Investors</h4>
            <p className="about-invest-para ">Building with us by believing in us</p>
            <Col sm={4} md={4} lg={4} className="pb-5">
              <img src={Blume} alt="blume-img" className="blume-img"></img>
            </Col>
            <Col sm={4} md={4} lg={4} className="pb-5">
              <img src={GFC} alt="blume-img" className="blume-img"></img>
            </Col>
            <Col sm={4} md={4} lg={4} className="pb-5">
              <img src={partner2} alt="blume-img" className="blume-img"></img>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5 pb-5 about-section-mid">
        <Container>
          <Row>
            <div className=" pb-2">
              <h2 className="about-sec-mid">Ab India Chalega ElectricPe!</h2>
            </div>
            <img src={Eplogo} alt="ep-logo"></img>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <h4 className="About-sec-last-heading pt-5">Join Us</h4>
            <p className="about-sec-last-para">
              We are a team of passionate dreamers and critical thinkers who
              are on a mission to pave the way toward building a sustainable
              EV-friendly future. We believe that customers are the heart and soul
            of our journey and if the idea of powering up billions of EVs gets
              you super-charged, then ElectricPe is the perfect destination for you!
            </p>
            <p className="about-sec-last-para">Come be a part of our electrified imagination 
              Let’s not just change our lives but
              the lives of millions of others!</p>
            <div className="pt-5 pb-5">
              <span className="about-sec-last-btn">Thank you!</span>
            </div>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default AboutUs