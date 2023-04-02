import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { NavLink } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import '../style/style.css'

function Header() {
    return(
        <Navbar bg="info" expand="lg">
            <NavbarBrand>Brian Chiang</NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="right-aligned">
                <Nav>
                    <NavLink className="nav-link" to="/about">About Me</NavLink>
                    <NavLink className="nav-link" to="/about">About Me</NavLink>
                    <NavLink className="nav-link" to="/about">About Me</NavLink>
                    <NavLink className="nav-link" to="/about">About Me</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default Header