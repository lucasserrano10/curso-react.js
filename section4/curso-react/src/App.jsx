import './App.css'
import Myform from './components/Myform'

function App() {

  return (
    <>
    <h2>My forms</h2>
    <Myform user={{name: 'Josias', email:'josias@gmail.com'}}/>
    </>
  )
}

export default App
