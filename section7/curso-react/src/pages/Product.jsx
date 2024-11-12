import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";


const Product = () => {
    // 4 - rota dinamica
    const { id } = useParams();

    //5 - carregamento do dado individual
    const url = "http://localhost:3000/products/" + id

    const {data:product, loading, error} = useFetch(url)

    return (
    <>
        <p>ID do produto : {id}</p>
        {error && <p>Ocorreu um Erro... </p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h2>{product.name}</h2>
                <h4>R$: {product.price}</h4>
                {/* Nested Routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
    )
}

export default Product
