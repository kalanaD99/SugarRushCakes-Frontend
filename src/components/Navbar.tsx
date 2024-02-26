import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <NavbarBs className="bg-white Shadow-sm mb-3">
        <Container>
           <Nav>
            <Nav.Link to = "/"as = {NavLink}>
                Home
            </Nav.Link>
            <Nav.Link to = "/About"as = {NavLink}>
               About
            </Nav.Link>
            <Nav.Link to = "/Products"as = {NavLink}>
                Products
            </Nav.Link>
            <Nav.Link to = "/Admin"as = {NavLink}>
                Admin
            </Nav.Link>
            <Nav.Link to = "/Contact"as = {NavLink}>
               Contact
            </Nav.Link>
           </Nav>
        </Container>
     </NavbarBs>
  )
}
