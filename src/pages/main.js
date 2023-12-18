import React, { Fragment } from 'react'
import "../pages/main.css";
import { FaArrowRight } from "react-icons/fa";
import OwlCarousel from 'react-owl-carousel';
import mobilephone from '../assets/images/mobilephone.jpg';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import bike from "../assets/images/bike.png";
import pay1 from "../assets/images/pay1.svg";
import { Form, Container, Row, Col } from 'react-bootstrap';
import vog from "../assets/images/vog.png";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaRegMessage } from 'react-icons/fa6';
import logo from "../assets/images/main-banner-heading.jpg";
import carousel1 from "../assets/images/carousel-img-1.png";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import carousel4 from "../assets/images/carousel4.jpg";
import feed from "../assets/images/feedback-pre.png";
// import { type } from '@testing-library/user-event/dist/type';
function Main() {

  return (
    <Fragment>
      <section className="head-banner">
        <Container className="pt-5">
          <div className="mid-banner pt-5">
            <div>
              <h2 className="top-banner-head pt-5">All Things Electric</h2>
            </div>
            <div className="top-banner-mid pb-4">
              <p>
                Get an EV, Charging is sorted!
              </p>
            </div>
            <div className="d-flex">
              <div className="mx-3 ">
                <a href="https://play.google.com/store/apps/details?id=com.wattapp.electricpe&hl=en&gl=US">
                  <span className="top-ban-end">
                    Download App
                  </span>
                </a>
              </div>
              <div className="">
                <a href="https://shop.electricpe.com/">
                  <span className="top-ban-end-2">
                    Explore Shop
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-5 pb-5">
        <Container>
          <Row>
            <Col sm={4} md={4} lg={4} className=".col-4">
              <img src={bike} alt="bike-ev" className="bik-img" />
            </Col>
            <Col sm={8} md={8} lg={8} className=".col-8">
              <div className="main-banner">
                <p className='ev-head'>
                  Why EVs ?
                </p>
              </div>
              <div className="">
                <p className="ev-para">
                  Ready to
                  drive into the future while saving the planet and your wallet? Electric Vehicles
                  (EVs) are not just a trend, they’re a smart investment. With lower operational and maintenance costs,
                  EVs put money back in your pocket.
                  Take advantage of government incentives that make going green more affordable than ever.
                  Feel the thrill with swift, silent acceleration while you navigate the roads in style.
                  But it’s not just about you—it’s about the planet too. By choosing an EV, you’re taking a stand for cleaner
                  air and a healthier environment. Make the switch today and become a part of the EV revolution!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Elec-char pb-5">
        <Container>
          <div className="ev-head-first pt-5">

            <p>Electricpe Charging
            </p>
            <p>Infrastructure</p>

          </div>
          <div className='elec-char-end'>
            <p className="elec-para-sty">
              With our platform, we aim to create a seamless and convenient experience for all
              those who want to switch to electric vehicles and contribute towards a greener
              tomorrow. Fleet owners,housing societies, shops, offices, and co-working spaces 
              can now easily manage their charging infrastructure and monitor usage through 
              our user-friendly platform,further promoting sustainability</p>
            
          </div>
        </Container>
      </section>
      <section className="Ev-char-simp mt-5 mb-5">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className="pt-5 col-6">
              <div>
                <picture>
                  <source media="(min-width:650px)" srcset={vog} />
                  <source media="(min-width:320px)" srcset={mobilephone} />
                  <img src={vog} alt="mobile-phone" className="phone-styl"/>
                   </picture>
                 </div>
              {/* <img src={vog} alt="phone-img" className="phone-styl pt-5" /> */}
            </Col>
            <Col xs={12} sm={12} md={6} className="pt-5 col-6">
            <Row>
            <Col>
              <div className="ev-head-first-ext pt-5">
                <div className="elementar-head-style">EV Charging,
                  <p className="pe-5">Simplified.</p></div>
              </div>
              </Col>
              </Row>
              <Container>
                <Row>
                  <Col  sm={4} md={4} lg={4} className="qr-scan-style col-4">
                    <span >
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" className="qr" data-name="Layer 1" viewBox="0 0 122.61 122.88"><defs></defs><title>qr-code-scan</title><path class="cls-1" d="M26.68,26.77H51.91V51.89H26.68V26.77ZM35.67,0H23.07A22.72,22.72,0,0,0,14.3,1.75a23.13,23.13,0,0,0-7.49,5l0,0a23.16,23.16,0,0,0-5,7.49A22.77,22.77,0,0,0,0,23.07V38.64H10.23V23.07a12.9,12.9,0,0,1,1-4.9A12.71,12.71,0,0,1,14,14l0,0a12.83,12.83,0,0,1,9.07-3.75h12.6V0ZM99.54,0H91.31V10.23h8.23a12.94,12.94,0,0,1,4.9,1A13.16,13.16,0,0,1,108.61,14l.35.36h0a13.07,13.07,0,0,1,2.45,3.82,12.67,12.67,0,0,1,1,4.89V38.64h10.23V23.07a22.95,22.95,0,0,0-6.42-15.93h0l-.37-.37a23.16,23.16,0,0,0-7.49-5A22.77,22.77,0,0,0,99.54,0Zm23.07,99.81V82.52H112.38V99.81a12.67,12.67,0,0,1-1,4.89,13.08,13.08,0,0,1-2.8,4.17,12.8,12.8,0,0,1-9.06,3.78H91.31v10.23h8.23a23,23,0,0,0,16.29-6.78,23.34,23.34,0,0,0,5-7.49,23,23,0,0,0,1.75-8.8ZM23.07,122.88h12.6V112.65H23.07A12.8,12.8,0,0,1,14,108.87l-.26-.24a12.83,12.83,0,0,1-2.61-4.08,12.7,12.7,0,0,1-.91-4.74V82.52H0V99.81a22.64,22.64,0,0,0,1.67,8.57,22.86,22.86,0,0,0,4.79,7.38l.31.35a23.2,23.2,0,0,0,7.5,5,22.84,22.84,0,0,0,8.8,1.75Zm66.52-33.1H96v6.33H89.59V89.78Zm-12.36,0h6.44v6H70.8V83.47H77V77.22h6.34V64.76H89.8v6.12h6.12v6.33H89.8v6.33H77.23v6.23ZM58.14,77.12h6.23V70.79h-6V64.46h6V58.13H58.24v6.33H51.8V58.13h6.33V39.33h6.43V58.12h6.23v6.33h6.13V58.12h6.43v6.33H77.23v6.33H70.8V83.24H64.57V95.81H58.14V77.12Zm31.35-19h6.43v6.33H89.49V58.12Zm-50.24,0h6.43v6.33H39.25V58.12Zm-12.57,0h6.43v6.33H26.68V58.12ZM58.14,26.77h6.43V33.1H58.14V26.77ZM26.58,70.88H51.8V96H26.58V70.88ZM32.71,77h13V89.91h-13V77Zm38-50.22H95.92V51.89H70.7V26.77Zm6.13,6.1h13V45.79h-13V32.87Zm-44,0h13V45.79h-13V32.87Z"></path></svg>
                    </span>
                  </Col>
                  <Col sm={6} md={6} lg={6} className="col-6">
                    <h3 className='eva'>
                      SCAN
                    </h3>
                    <p className='eva elementar-para-style'>
                      Find the nearest charging station and Scan the QR code
                    </p>
                  </Col>

                  <Col  sm={4} md={4} lg={4} className="qr-scan-style col-4">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="qr" id="Layer_1" data-name="Layer 1" viewBox="0 0 118.09 122.88"><defs></defs><title>electric-vehicle-charging-station</title><path class="cls-1" d="M105.67,61.11c.31,4.25.94,8.53,1.58,12.78A139.75,139.75,0,0,1,109,89.32c.27,6.75-.53,12.3-2.76,16.22-2.48,4.38-6.51,6.72-12.45,6.51h0c-7.09-.13-11.45-4.11-13.42-11.46-1.27-4.73-1.46-11-.7-18.5.54-5.42,1.36-8.89,1-14.47-.45-6.33-1.57-11.32-3.4-15a11.51,11.51,0,0,0-6.27-6v59.93a8.18,8.18,0,0,1,2.3,1.64,8.41,8.41,0,0,1,2.47,6v6A2.74,2.74,0,0,1,73,122.88H2.74A2.74,2.74,0,0,1,0,120.14v-6a8.42,8.42,0,0,1,2.47-6A8.57,8.57,0,0,1,4,107V14.52A14.54,14.54,0,0,1,18.56,0H56.34A14.63,14.63,0,0,1,70.93,14.59V41c11.36,2.48,14.4,15.65,15.13,26.51.49,7.31-.15,7.2-.94,14.63-.77,7.13-.64,12.88.49,17.09,1.27,4.77,4,7.35,8.24,7.41h.05c3.66.12,6.09-1.22,7.52-3.75,1.69-3,2.28-7.55,2-13.31a139.76,139.76,0,0,0-1.68-14.85c-.66-4.44-1.33-8.91-1.64-13.57h-.92l-.09-5.88c-7-.68-9.64-5.39-9.64-12.16V40h-1a1.65,1.65,0,0,1-1.65-1.65V36.46a1.65,1.65,0,0,1,1.65-1.65h4.89V26.16a2.59,2.59,0,0,1,2.6-2.6h0a2.6,2.6,0,0,1,2.6,2.6v8.65h7.65V26.16a2.6,2.6,0,0,1,2.6-2.6h0a2.6,2.6,0,0,1,2.61,2.6v8.65h5a1.65,1.65,0,0,1,1.65,1.65v1.91A1.65,1.65,0,0,1,116.44,40h-1.29v3.45c0,6.68-2.26,10.66-8.75,11.7v5.94ZM42.21,71.28H49.1a1.81,1.81,0,0,1,1.81,1.81,1.85,1.85,0,0,1-.31,1l-16.41,28a1.8,1.8,0,0,1-3.31-1.3L33.3,83.62l-8.16.14A1.8,1.8,0,0,1,23.32,82a1.71,1.71,0,0,1,.25-.95l16.13-28A1.81,1.81,0,0,1,43,54.23l-.83,17.05ZM21.86,12.54H53.68a6,6,0,0,1,4.24,1.76c.07.08.15.15.22.24a6,6,0,0,1,1.56,4v20.3a6,6,0,0,1-6,6H21.86a6,6,0,0,1-4.23-1.76h0a6,6,0,0,1-1.76-4.24V18.53a6,6,0,0,1,1.76-4.24,2.41,2.41,0,0,1,.24-.21,6,6,0,0,1,4-1.54Zm46.58,98.95H7.26a3,3,0,0,0-.91.62,2.92,2.92,0,0,0-.86,2.07v3.24H70.24v-3.24a3,3,0,0,0-.86-2.07,3,3,0,0,0-.94-.63Z"></path></svg>
                    </span>
                  </Col>
                  <Col  sm={6} md={6} lg={6} className="col-6">
                    <h3 className='eva'>
                      CHARGE
                    </h3>
                    <p className='eva elementar-para-style'>
                      Start charging your vehicle & Get live updates on the app
                    </p>
                  </Col>

                  <Col  sm={4} md={4} lg={4} className="qr-scan-style col-4">
                    <div>
                      <img src={pay1} alt="pay-logo" className="pay-style" />
                    </div>
                  </Col>
                  <Col sm={6}  md={6} lg={6} className="col-6">
                    <h3 className='eva'>
                      PAY
                    </h3>
                    <p className='eva elementar-para-style'>
                      Pay only for what you consume
                    </p>
                  </Col>
                </Row>
              </Container>

            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid className="pt-5 mt-5">
          <div className="pho-coll">
            <Col className="col-md-4  px-3">
              <ul className="map-header-sec-first p-0 find">
                <li >Find Your</li>
                <li >Nearest EV </li>
                <li >Charging </li>
                <li >Station </li>
              </ul>
              <div className="elec-btn p-3 mb-3">
                <Link to="/station">
                  <span className="color-wo mr-2">View All Stations</span>
                  <span className="Arrow mx-2"><FaArrowRight />
                  </span>
                </Link>
              </div>
              <div className="del-pho  mb-3 px-3">
                <h2 className="pt-5">
                  <span className="ev-img-txt">Delhi</span>
                </h2>
              </div>
            </Col>
            <Col className="col-md-4 px-3">
              <div className="Ban-pho">
                <h2 className="pt-5">
                  <span className="ev-img-txt">Banglore</span>
                </h2>
              </div>
            </Col>
            <Col className="col-md-4 mt-3 px-3 ev_images">
              <div className="hyd-pho ">
                <h2 className="pt-5">
                  <span className="ev-img-txt">Hyderabad</span>
                </h2>
              </div>
            </Col>
          </div>
        </Container>
      </section>
      <section className="visit-banner mt-5 pb-3">
      </section>
      <section className='visit-down'>
        <Container className="pb-3">
          <Row>
            <Col sm={12} md={4} lg={4} className="col-12 mt-2">
              <div className='card-ban'>
                <h3>ElectricPe Kadubeesanahalli Store</h3>
                <br />
                <p>
                  20/5, Outer Ring Rd, Kaverappa Layout,Kadubeesanahalli, Panathur, Bengaluru, Karnataka 560103
                </p>
                <a href="#evlocator">
                  <span className='elem-btn-text'>View in map</span>
                </a>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} className="col-12 mt-2">
              <div className='card-ban'>
                <h3>ElectricPe Kalyan nagar Store</h3>
                <p>

                  100 ft rg road , Annaiya reddy layout, Dodda Banaswadi Main Rd, opp. to Global Boutique, Bengaluru, Karnataka 560043
                </p>
                <br />
                <a href="#evlocator">
                  <span className='elem-btn-text'>View in map</span>
                </a>
              </div>

            </Col>
            <Col sm={12} md={4} lg={4} className="col-12 mt-2">
              <div className="card-ban">
                <h3>ElectricPe Kudlu store</h3>
                <br />
                <p>
                  Near Urban Nest pro, Manjunatha Nagar, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560068.
                </p>
                <br />
                <a href="#evlocator">
                  <span className='elem-btn-text'>View in map</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="form-head">
            <Col sm={12} md={6} lg={6}>
              <div className='keva zeva seva'>
                <h2>Contact Us at</h2>
                <ul className="telepho me-4">
                  <li className="pt-2 me-3"> 
                  <span className='me-2'>
                  <BsFillTelephoneFill />
                  </span>
                    +91 8147060222</li>
                  <li className="pt-2">
                  <span className="me-2 message-style">
                    <FaRegMessage />
                    </span>
                    support@electricpe.com
                  </li>

                </ul>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="keva">
                <h2>Get in touch with us</h2>
                <Form action="" method="post" name="contact_form" id="contact_form">
                  <label for="name"></label>
                  <input className="namer" type="text" placeholder='Name' id="name"></input>
                  <br />
                  <br />
                  <label for="phone number"></label>
                  <input className="namer" type="text" placeholder='Phone Number' id="phone number"></input>
                  <br />
                  <br />
                  <input type="submit" className="sub-btn" placeholder="Submit" value="Submit"></input>
                </Form>
              </div>


            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5">
        <Container>
          <div>
            <img src={logo} className="store-bottom-banner" alt="store-last" />
          </div>
        </Container>
      </section>
      <section className="foot-testimonial-sec">
        <Container>
          <Row>
            <h2 className="test">
              Testimonials
            </h2>
          </Row>
        </Container>
      </section>
      <section className="carousel-background">
        <OwlCarousel className='owl-theme' autoplay={true} items={1} loop margin={4} nav>
          <div className="item feedback pt-5">
            <div>
              <img src={carousel1} alt="client-feedback" className="carousel-style"></img>
            </div>

            <div>
              <Container>
                <Row>
                  <div className="feed-para">
                    <span>
                      <img src={feed} alt="" className="feed-sty" />
                    </span>
                    Sales executive was helpful. Very comfortable vehicle and better than any other brand encountered. Happy with the<br />
                    services offered.
                    <span>
                      <img src={feed} alt="" className="feed-sty" />
                    </span>
                  </div>
                </Row>
                <Row>
                  <cite className="elementar-style">
                    <span className="feedback-customer-name">Vikas , </span>
                    <span className="feedback-customer-loc">Bangalore</span>
                  </cite>
                </Row>
              </Container>
            </div>
          </div>
          <div className="item feedback pt-5">
            <div>
              <img src={carousel2} alt="client-feedback" className="carousel-style"></img>
            </div>

            <div>
              <Container>
                <Row>
                  <div className="feed-para">
                    <span>
                      <img src={feed} alt="" className="feed-sty" />
                    </span>
                    I now don't have to worry about who is using the chargers, and how to collect money!
                    <span>
                      <img src={feed} alt="" className="feed-sty" />
                    </span>
                  </div>
                </Row>
                <Row>
                  <cite className="elementar-style">
                    <span className="feedback-customer-name">Somanna Reddy,</span>
                    <span className="feedback-customer-loc">Bangalore</span>
                  </cite>
                </Row>
              </Container>
            </div>
          </div>
          <div className="item feedback pt-5">
            <div>
              <img src={carousel3} alt="client-feedback" className="carousel-style"></img>
            </div>

            <div>
              <Container>
                <Row>
                  <div className="feed-para">
                    <span>
                      <img src={feed} alt="" className="feed-sty" />
                    </span>
                    The whole process was smooth.
                    I am really happy with the delivery being done at my doorstep and also extremely <br />
                    satisfied with the support provided by ElectricPe throughout the process.
                    <span>
                      <img src={feed} alt="" className="feed-sty" />
                    </span>
                  </div>
                </Row>
                <Row>
                  <cite className="elementar-style">
                    <span className="feedback-customer-name">Sonam Pal ,</span>
                    <span className="feedback-customer-loc">Bangalore</span>
                  </cite>
                </Row>
              </Container>
            </div>
          </div>
          <div className="item feedback pt-5">
            <div>
              <img src={carousel4} alt="client-feedback" className="carousel-style"></img>
            </div>

            <div>
              <Container>
                <Row>
                  <div className="feed-para">
                    <span>
                      <img src={feed} alt="" className="feed-sty" />
                    </span>
                    We installed ElectricPe
                    EV charging station four months ago, and since then we have been able to make good extra
                    <br /> income without any
                    problem.
                    <span>
                      <img src={feed} alt="" className="feed-sty" />
                    </span>
                  </div>
                </Row>
                <Row>
                  <cite className="elementar-style">
                    <span className="feedback-customer-name">Basavaraj RJ ,</span>
                    <span className="feedback-customer-loc">Bangalore</span>
                  </cite>
                </Row>
              </Container>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </Fragment>
  );
}
export default Main;