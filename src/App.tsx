import { Router,Route, Routes } from "react-router-dom"
import { Container,  } from "react-bootstrap"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Admin from "./pages/Admin"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"

export default function App() {
  return (
  <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </Container>
  </>  
  )
}
  