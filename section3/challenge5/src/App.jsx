import './App.css'
import ShowCars from './components/ShowCars'

function App() {
  const cars = [
    {id:1, brand: 'AUDI', model:'A3', km :1000, newCar:false},
    {id:2, brand: 'TESLA', model:'CYBERTRUCK', km :0, newCar:true},
    {id:3, brand: 'BMW', model:'320i', km :10000, newCar:false},
    {id:4, brand: 'TESLA', model:'MODEL Y', km :22000, newCar:false},
  ]
  return (
    <>
    <div className='div-title'>
      <h1>CONHECENDO O ESTOQUE DA RENTAL-CAR</h1>
    </div>
    {cars.map((car) => (
      <ShowCars id={car.id} brand={car.brand} model={car.model} km={car.km} newCar={car.newCar}/>
    ))}
    </>
  )
}

export default App
