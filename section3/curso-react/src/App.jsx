import './App.css'
import Mycomponent from './components/Mycomponent'
import Title from './components/Title'

function App() {
  const n = 15
  const redTitle = true
  return (
    <>
      {/* css global */}
      <h1>REACT COM CSS</h1>
      {/* css de componente */}
      <Mycomponent/>
      {/* css inline */}
      <p style={{color: 'blue', padding: "20px", borderTop: '2px solid red'}}>Esté elemento foi estilizado de forma inline</p>
      {/* css inline dinamico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'gold'})}>CSS DINÂMICO</h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? 'red-title' : 'title' }>Este vai ter classe dinamica</h2>
      {/* css modulos */}
      <Title/>
    </>
  )
}

export default App
