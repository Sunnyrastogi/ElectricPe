// import React, { Fragment } from 'react'
// import "./header.css";
// import { Container } from 'react-bootstrap';
// import logo from "../assets/images/eplogo.png";
// import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// function Header() {
//   return (
//     <Fragment>
//       <section className="Nav-bar-style">
//         <Navbar collapseOnSelect expand="lg" className="navbar-align-top">
//           <Container>
//             <Link to="/">
//               <Navbar.Brand>
//                 <img src={logo} alt="elctricpe" className="elec-logo" />
//               </Navbar.Brand>
//             </Link>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse>
//               <Nav className="ms-auto mx-2 pt-2">
//                 <Link to="/station">
//                   <Nav.Item>Home</Nav.Item>
//                 </Link>
//                 <Link to="/about">
//                   <Nav.Item>About Us </Nav.Item>
//                 </Link>

//                 <NavDropdown title="API" id="collapsible-nav-dropdown">
//                   <NavDropdown.Item as={Link} to="/action/3.1">Create Api</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item as={Link} to="/action/3.2">
//                     Add new API
//                   </NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item as={Link} to="/action/3.3">Modify api</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item as={Link} to="/action/3.4">
//                     Delete API
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 <Link to="/rent-ev">
//                   <Nav.Item >Rent Evs</Nav.Item> </Link>
//                 <Link to="/contactus">
//                   <Nav.Item >Contact Us</Nav.Item>
//                 </Link>
//                 <NavDropdown title="More" id="collapsible-nav-dropdown">
//                   <NavDropdown.Item as={Link} to="/action/4.1">Blog</NavDropdown.Item>
//                   <NavDropdown.Divider />

//                   <NavDropdown.Item as={Link} to="/action/4.2">
//                     Station finder
//                   </NavDropdown.Item>

//                 </NavDropdown>

//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </section>
//     </Fragment>
//   )
// }

// export default Header;


// heade.css

/* navbar css */
// .nav-link:focus, .nav-link:hover {
//     color: #FFFFFF!important;
// }
// .navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
//     color: #4CBB17!important; 
// }
// .navbar-align-top{
//     top: 0;
//     position: absolute;
//     width: 100%;
// }
// @media (max-width:767px){
//    .navbar-collapse {
//     background-color: #000000;
//     }
// }
// .dropdown-item a{
//     color:black;
// }
// .dropdown-item.active,
//  .dropdown-item:active {
//     color: #000000; 
//     text-decoration: none;
//     background-color: #FFFFFF;
// }
// a{
//     text-decoration: none;
// }

// .head-banner {
//     background-image: url("../assets/images/head-banner.jpg");
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     height: 599px;
//     /* top: -108px; */
//     /* position: relative; */
// }
// .elec-logo {
//     width: 118px;
//     height: 24px;
//     margin: 32px 34px 36px 30px;
// }
// .navbar-nav a{
//     color: white;
//     font-family: "Poppins", Sans-serif;
//     font-size: 17px;
//     font-weight: 500;
//     line-height: 25px;
// }

// .navbar-collapse {
//     flex-grow: 0!important;
    
//     align-items: center;
// }
// .top-banner-head{
//     color: #FFFFFF;
//     font-family: "Poppins", Sans-serif;
//     font-size: 64px;
//     font-weight: 700;
//     line-height: 85px;
//     letter-spacing: 2.5px;
// }
//  .top-banner-mid{
//     color: #FFFFFF;
//     font-size: 16px;

//  }
//  .dropdown{
//     position: relative;
//     top: -8px;
// }
// a.dropdown-item {
//     color:black;
// }

// .nav-item {
//     margin-right: 35px;
// }
// .Nav-bar-style {
//     background-color: transparent;
//     z-index: 999;
//     width: 100%;
//     position: absolute;
//     top: 0;
// }
//  .top-ban-end{
//     color:#FFFFFF;
//     font-size: 20px;
//     text-decoration: none!important;
//     font-weight: 700;
//     Border:1px solid #52ff00;
//     border-radius:5px ;
//     background-color: transparent;
//     padding: 15px 22px 15px 22px;
//     background-image: linear-gradient(14deg, #4cbb176e -55%, #000000 100%);
//  }
//  .top-ban-end-2{
//     Border:1px solid #52ff00;
//     border-radius:5px ;
//     background-color: transparent;
//     padding: 15px 22px 15px 22px;
//     color:#FFFFFF;
//     font-size: 20px;
//     text-decoration: none!important;
//     background-image: linear-gradient(9deg, #4CBB179C 0%, #123601 100%);
//  }
//  .mid-banner{
//     text-align:center;
//  }
//  .d-flex {
//     display: flex!important;
//     justify-content: center;
// }



// new navbar

// import React, { useState } from 'react'
// import "../components/backhead.css";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/eplogo.png";
// import Dropdown from 'react-bootstrap/Dropdown';
// import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";
// function Backhead (){
//     const [Mobile,setMobile] = useState(false);
//     return (
//         <section className="Nav-bar-style">
//         <nav className="navbar ">
//             <Link to="/">
//                 <h4 className="elec-logo"><img src={logo} alt="elctricpe" /></h4>
//             </Link>
//             <ul className="nav-links ms-auto ">
//                 <Link to="/station">
//                    <li className="mx-3 pt-2">Home</li> 
//                    </Link>
//                 <Link to="/about">
//                     <li className="mx-3 pt-2">About Us </li>
//                 </Link>
//                 <li className="mx-2">  
//                 <Dropdown>
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
//                 </li>
//                 <Link to="/rent-ev">
//                     <li className="mx-3 pt-2">Rent Evs</li> 
//                  </Link>
//                 <Link to="/contactus">
//                     <li className="mx-3 pt-2">Contact Us</li>
//                   </Link>
//                   <li className="mx-2"> 
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
//         <button className="mobile-menu-icon">
//         {Mobile?<FaTimes />:<FaBars/>}
//         </button>
      
//         </nav>
//         </section>
//     )
// }

// export default Backhead;

// new nav csss

/* li{
    text-decoration: none;
    list-style-type: none;
}
.btn{
    border: none;
    border-radius: none;
    background-color: transparent;
}
.btn:hover {
    color:#FFFFFF;
    background-color: transparent!important;
    border-color: none!important;
}
.nav-links:focus, .nav-links:hover {
    color: #FFFFFF!important;
}
.nav-links li {
    color:#FFFFFF;
}
.navbar .nav-links.active, .navbar .nav-links.show {
    color: #4CBB17!important; 
}
.Nav-bar-style {
    background-color: transparent;
    z-index: 999;
    width: 100%;
    position: absolute;
    top: 0;
}
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:10vh;
}
.elec-logo img{
   width:118px;
   height:24px;
}
.nav-links {
    display: flex;
    justify-content: center;
  width:50%;
}
.button{
    border: none;
    background:none;
    font-size:20px;
}
.mobile-menu-icon{
    display:none;
}
@media (max-width:768px){
    .elec-logo{
      position:absolute ;
      top:15px;
      left:30px
    }
} */
