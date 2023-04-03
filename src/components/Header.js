import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { NavLink } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import '../style/style.css'

function Header() {
    return(
        <Navbar className='navbar' bg="dark" expand="lg">
            <NavbarBrand className='text-white'>Brian Chiang</NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="right-aligned">
                <Nav>
                    <NavLink className="nav-link text-white" to="/">About Me</NavLink>
                    <NavLink className="nav-link text-white" to="/project">Projects</NavLink>
                    <NavLink className="nav-link text-white" to="/resume">Resume</NavLink>
                    <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default Header