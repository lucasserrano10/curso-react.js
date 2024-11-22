import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
//components
import NavBar from "./components/NavBar"
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
