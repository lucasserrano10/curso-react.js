import React from 'react'
import MyComponent from './MyComponent'

const TemplateExpressions = () => {
    const name = "Lucas"
    const data = {
        age: 31,
        job: "Programmer"
    }

    return (
    <div>
        <h1>Olá {name}, tudo bem ?</h1>
        <p>Você atua como {data.job}</p>
        <p>e tem {data.age} anos</p>
        <MyComponent/>
    </div>
)
}

export default TemplateExpressions
