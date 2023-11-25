import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div><Navbar style={{backgroundColor:'blue'}} collapseOnSelect expand="lg" className="bg-body-terinery  w-100">
    <Container>
      <Navbar.Brand style={{color:'white', fontFamily:'Signika',fontSize:'30px', }} >Flipkart
      <h6 style={{fontSize:'15px'}}>Explore<span style={{color:'yellow',fontSize:'20px'}}> Plus</span></h6></Navbar.Brand>
      <input   className='rounded w-75 form-control' type="text" placeholder=' Search for Products , Brands and More'/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="me-auto">
            
          <NavDropdown className='btn'  title="Login" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">New customer?<span style={{color:'blue',margin:'5px'}}> Sign up</span></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1"><i class="fa-solid fa-user"></i> My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <i class="fa-sharp fa-solid fa-circle-plus fa-2xs"></i> Flip plus Zone
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><i class="fa-solid fa-box fa-2xs"></i> Orders</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
            <i class="fa-regular fa-heart fa-2xs"></i> Wishlist
              </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><i class="fa-solid fa-box fa-2xs"></i> Gift Cards</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
            </NavDropdown.Item>
          </NavDropdown>
          <h6 style={{marginLeft:'10px',color:'black'}}><i class="fa-solid fa-cart-shopping text-dark "></i> Cart</h6>
          <h6 style={{marginLeft:'10px',color:'black'}}><i class="fa-solid fa-box "></i> Become a seller</h6>

        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header