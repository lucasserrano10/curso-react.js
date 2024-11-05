import './App.css'
import City from './assets/teste-ny.jpg'


function App() {
  return (
    <>
      <h1>Avançando no React</h1>
      {/*IMAGEM EM PUBLIC*/}
      <div>
        <img src="/teste-ny.jpg" alt="new-york" />
      </div>
      {/*IMAGEM EM ASSETS*/}
      <div>
        <img src={City} alt="" />
      </div>
    </>
  )
}

export default App
