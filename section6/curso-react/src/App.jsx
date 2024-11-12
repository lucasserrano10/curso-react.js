import './App.css'
import { useState, useEffect } from 'react'
// custom hook
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  // 4- custom hook

  const {data: items, httpConfig, loading, error} = useFetch(url)

  const [name,setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }

  //   fetchData()
  // }, []) 

  // 2 - enviando dados
  const handleSubmit =  async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers:{
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // })

    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // 5- refatorando POSt

    httpConfig(product, 'POST')
  }

  // 8 - remove 
  const handleDelete = (id) => {
    httpConfig(id, 'DELETE')
  }

  return (
    <>
      <div>
        <h1>Lista de Produtos</h1>
        {/* Loading */}
        {loading && <p className='loading-phrase'>Carregando dados...</p>}
        {error & <p>ERRO</p>}
        {!error  &&  <ul>
          {items && items.map((product) => (
            <li key={product.id}>Name: {product.name} - Price: {product.price} <button onClick={() => handleDelete(product.id)}>Delete</button> </li>
          ))}
        </ul>}
        <hr />
        <div className='add-product'>
          <form onSubmit={handleSubmit}>
            <label>
                Name:
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              Preço:
              <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {/* 7 - State de loading no POST */}
            {!loading && <input type="submit" value="Criar" onSubmit={handleSubmit}/>}
            {loading && <input type="submit" disabled value="Aguarde..." onSubmit={handleSubmit}/>}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
