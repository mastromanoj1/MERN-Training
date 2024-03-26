'use client'

import Link from 'next/link';
import React , {useState ,useEffect} from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar }from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSession, signIn, signOut ,getProviders } from "next-auth/react"


const logged = () => {
  return(
      < Nav className="me-auto">
            <Nav.Link href="/post"> Post</Nav.Link>
            <Nav.Link href="/about"> About Us </Nav.Link>
          </Nav>
  )
}

const notlogged = () => {
  return(
    <Nav>
      <Nav.Link href="#deets">Sign In</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
  </Nav>
  )
}
function NavbarMenu() {
  const [islogged, setislogged] = useState(true)
  const [providers, setproviders] = useState(null)

  useEffect(async () => {

    const  initprovider = async () => {
      const providers = await getProviders();
      setproviders(providers)
    }
    initprovider();
  }, [])
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Next-APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {islogged ? logged() : notlogged()  }
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;