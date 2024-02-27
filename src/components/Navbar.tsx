import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink} from "react-router-dom"
import "./css/Navbar.css"

export default function Navbar() {
  return (
    <NavbarBs className="navbar">
        <Container className="container">
           <Nav className="nav">
            <Nav.Link className="links" to = "/"as = {NavLink}>
                Home 
            </Nav.Link>
            <Nav.Link className="links" to = "/About"as = {NavLink}>
               About 
            </Nav.Link>
            <Nav.Link className="links" to = "/Products"as = {NavLink}>
                Products 
            </Nav.Link>
            <Nav.Link className="links" to = "/Admin"as = {NavLink}>
                Admin 
            </Nav.Link>
            <Nav.Link className="links" to = "/Contact"as = {NavLink}>
               Contact 
            </Nav.Link>
           </Nav>
        </Container>
     </NavbarBs>
  )
}
