

const Challenge = () => {
    const somaElementos = () => {
        let a = parseFloat(prompt('DIGITE UM VALOR'))
        let b = parseFloat(prompt('DIGITE OUTRO VALOR'))
        let soma = a + b
        alert(`A SOMA É ${soma}`)
    }
return(
    <div>
        <h3>VAMOS SOMAR ?</h3>
        <button onClick={somaElementos}>SOMAR</button>
    </div>
)
}

export default Challenge