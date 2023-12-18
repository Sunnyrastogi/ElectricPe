
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import logo from "../assets/images/eplogo.png";
import "../components/header.css";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "../components/header.css";
function Header() {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const handleNavItemClicked = () => {

        setExpanded(false);
    };

    return (
        <section className="Nav-bar-style">
            <Navbar expand="lg" className="nav-background" expanded={expanded}>
                <Container className="mobile-adjust-nav">
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <h4 className="elec-logo"><img src={logo} alt="elctricpe" /></h4>
                        </Link>
                    </Navbar.Brand>
                    {/* Custom toggle button */}
                    <Button variant="outline-light" onClick={toggleNavbar}>
                        {expanded ? <FaTimes /> : <FaBars />}
                    </Button>
                    {/* End of custom toggle button */}
                    {/* <Container className="nav-background-style"> */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-start ">
                            <Nav.Link onClick={handleNavItemClicked} className="me-5" >
                                <Link to="/station">
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link  onClick={handleNavItemClicked} className="me-5" >
                            <Link to="/about">
                                About Us
                             </Link>
                            </Nav.Link>
                            <NavDropdown title="API" id="basic-nav-dropdown"  className="me-5">
                                <NavDropdown.Item as={Link} to="/action/3.1" onClick={handleNavItemClicked} className="pb-3">
                                Create Api
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.2" onClick={handleNavItemClicked} className="pb-3">
                                Add new API
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3" onClick={handleNavItemClicked}>
                                Modify api
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/action/3.4" onClick={handleNavItemClicked}>
                                    Delete API
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={handleNavItemClicked}  className="me-5">
                            <Link to="/rent-ev">
                                    Rent Evs
                            </Link>
                           </Nav.Link>
                           <Nav.Link onClick={handleNavItemClicked}  className="me-5">
                            <Link to="/contactus">
                                    Contact Us
                            </Link>
                           </Nav.Link>
                           <NavDropdown title="More" id="basic-nav-dropdown" className="">
                                <NavDropdown.Item as={Link} to="/action/4.1" onClick={handleNavItemClicked} className="pb-3">
                               Blog
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/4.2" onClick={handleNavItemClicked} className="pb-3">
                               Station Finder
                                </NavDropdown.Item>
                                </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                {/* </Container> */}
            </Navbar>
        </section>
    );
}

export default Header;



// import Container from 'react-bootstrap/Container';
// import { useState } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Header() {

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;



// import React, { useState } from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// const Header = () => {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);

//   const handleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

//   return (
//     <>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbar-nav" onClick={handleOffcanvas} />
//           <Navbar.Collapse id="navbar-nav">
//             <Nav className="ml-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#services">Services</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link href="#home" onClick={() => setShowOffcanvas(false)}>
//               Home
//             </Nav.Link>
//             <Nav.Link href="#about" onClick={() => setShowOffcanvas(false)}>
//               About
//             </Nav.Link>
//             <Nav.Link href="#services" onClick={() => setShowOffcanvas(false)}>
//               Services
//             </Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//             <Nav.Link href="#contact" onClick={() => setShowOffcanvas(false)}>
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default Header;







// import React, { useState } from 'react'
// import "../components/header.css";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/eplogo.png";
// import {Dropdown,Collapse} from "react-bootstrap";
// import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";
// function Header() {
//   const[Mobile ,setMobile] = useState(false)

//     return (
//         <section className="Nav-bar-style">
//         <nav className="navbar">
//             <Link to="/">
//                 <h4 className="elec-logo"><img src={logo} alt="elctricpe" /></h4>
//             </Link>
//             <ul className= {Mobile? "nav-links-mobile":"nav-links"} onClick={()=>setMobile(false)}>
//                 <Link to="/station">
//                    <li className="mr-3 pt-3">Home</li>
//                    </Link>
//                 <Link to="/about">
//                     <li className="mr-3 pt-3">About Us </li>
//                 </Link>
//                 <li className="mr-2 pt-2">
//                 {/* <Collapse in={Mobile}> */}
//                  <Dropdown >
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                         API
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                         <Dropdown.Item as={Link} to="/action/3.1">Create Api</Dropdown.Item>
//                         <Dropdown.Item as={Link} to="/action/3.2">Add new API</Dropdown.Item>
//                         <Dropdown.Item as={Link} to="/action/3.3">Modify api</Dropdown.Item>
//                         <Dropdown.Item as={Link} to="/action/3.4">Delete API</Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>
//                 {/* </Collapse> */}
//                 </li>
//                 <Link to="/rent-ev">
//                     <li className="mr-3 pt-3">Rent Evs</li>
//                  </Link>
//                 <Link to="/contactus">
//                     <li className="mr-3 pt-3">Contact Us</li>
//                   </Link>
//                   <li className="mr-2 pt-2">
//                  <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                         More
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                         <Dropdown.Item as={Link} to="/action/4.1">Blog</Dropdown.Item>
//                         <Dropdown.Item as={Link} to="/action/4.2">Station finder</Dropdown.Item>
//                     </Dropdown.Menu>
//                  </Dropdown>
//                  </li>
//             </ul>
//         <button className="mobile-menu-icon" onClick={()=>setMobile(!Mobile)}>
//       {Mobile?<FaTimes/>:<FaBars/>}
//         </button>
//         </nav>
//         </section>
//     )
// }

// export default Header;
