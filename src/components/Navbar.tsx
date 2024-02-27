import {Button,Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink} from "react-router-dom"
import "./css/Navbar.css"

export default function Navbar() {
  return (
    <NavbarBs className="navbar">
        <Container className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="https://cdn-icons-png.flaticon.com/128/7441/7441405.png" alt="Logo" width="40" height="24" className="d-inline-block align-text-bottom"/>
                 Sugar Rush Cakes
                <img src="" alt="" />
            </a>
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
           <Button className="rounded-circle" style={{position: "relative"}}>
                <img src="https://www.svgrepo.com/show/525737/cart-large-2.svg" alt="" width="30"/>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                style={{
                    color: "white",
                    width:"1.5rem",
                    height:"1.5rem",
                    position:"absolute",
                    bottom:0,
                    right:0,
                    transform:"translate(25%,25%)"
                }}>3</div>
           </Button>
        </Container>
     </NavbarBs>
  )
}
