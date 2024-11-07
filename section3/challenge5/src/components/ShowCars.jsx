
const ShowCars = ({id, brand, model, km, newCar}) => {
    return (
    <div className="div-carros">
        <h1>{brand}</h1>
        <p>NÚMERO DE SÉRIE : {id}</p>
        <p>MODELO: {model}</p>
        <p>KM: {km}</p>
        {newCar ? (<p>CARRO NOVO</p>) : (<p>SEMINOVO</p>)}
    </div>
    )
}

export default ShowCars
