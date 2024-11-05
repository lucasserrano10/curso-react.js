
const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        alert('DISPAROU O EVENTO !')
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui !</button>
            </div>
            <div>
                <button onClick={() => alert('clicou')}>Clique aqui Também</button>
            </div>
            <div>
                <button onClick={()=> {
                    if(true){
                        alert('Isso Não deveria existir')
                    }
                }}>Clica aqui, por favor</button>
            </div>
        </div>
    )
}

export default Events
