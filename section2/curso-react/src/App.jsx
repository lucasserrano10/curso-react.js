import { Children } from 'react'
import './App.css'
import City from './assets/teste-ny.jpg'
import CarDetails from './components/CarDetails'
import Conditional from './components/Conditional'
import Fragments from './components/Fragments'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import ExecuteFunction from './components/ExecuteFunction'
import ChangeMessageState from './components/ChangeMessageState'
import { useState } from 'react'
import UserDetails from './components/UserDetails'



function App() {

  const users = [
    {id:1, name: "Lucas", job: "Software Enginner", age: 18},
    {id:2, name: "Arthur", job: "Sales Person", age: 28},
    {id:3, name: "Fernando", job: "Business men", age: 8},
  ]

  const cars = [
    {id:1, brand: 'FERRARI', color: 'AMARELA', newCar:true, km:0},
    {id:2, brand: 'AUDI', color: 'PRETA', newCar:false, km:1000},
    {id:3, brand: 'BMW', color: 'AZUL', newCar:false, km:2000},
    {id:4, brand: 'BYD', color: 'VERDE MUSGO', newCar:true, km:0},
  ]

  function showMessage(){
    console.log('MOSTRANDO A MENSAGEM')
  }

  const [message,setMessage] = useState("")
  
  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
      <ManageData/>
      <ListRender/>
      <Conditional/>
      {/* PROPS */}
      <ShowUserName name="Matheus" />
      {/* DESTRUCTURING */}
      <CarDetails brand = "VW" km = {100000} color = "AZUL" newCar={false}/>
      <CarDetails brand = "BMW" km = {0} color = "VERMELHA" newCar={true}/>
      <CarDetails brand = "AUDI" km = {45000} color = "PRETA" newCar={false}/>
      {/* LOOP RENDERIZAÇÃO */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      {/* <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/> */}
      {/* Desafio */}
      <h1>Esses são todos os usuários do seu sistema</h1>
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age}/>
      ))}
    </>
  )
}

export default App
