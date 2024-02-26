import { Router,Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </Container>
    
  )
}
  