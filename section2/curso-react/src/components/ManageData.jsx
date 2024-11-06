import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const [number,setNumber] = useState(20)

    return (
        <div>
            <div>
                <p>VALOR: {someData}</p>
                <button onClick={() => (someData = 15)}></button>
            </div>
            <div>
                <p>VALOR {number}</p>
                <button onClick={() => setNumber(45)}>Mude o State</button>
            </div>
        </div>
    )
}

export default ManageData
