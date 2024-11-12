
import './App.css'
// 1 - config router
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import Error from './pages/Error'
// components
import NavBar from './components/NavBar'
import Search from './components/Search'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <>
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar/>
        {/* 9- SEARCH */}
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* Rota dinamica */}
          <Route path='/products/:id' element={<Product/>}/>
          {/* Nested routes */}
          <Route path='/products/:id/info' element={<Info/>}/>
          {/* Search */}
          <Route path='/search' element={<Search/>}/>
          {/* Redirect */}
          <Route path='/company' element={<Navigate to='/about'/>}/>
          {/* PAGE 404 */}
          <Route path='*'element={<Error/>}/>
      
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
