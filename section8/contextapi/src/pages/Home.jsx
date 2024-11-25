import styled from "styled-components"
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Container = styled.div`
    background-color: white;
    border-radius:20px;
    box-shadow: 2px 2px 2px black;
    padding: 20px;
    margin: 20px 20px auto;

    h1{
        font-size: 26px;
        font-weight: 800;
    }

    p{
        font-size: 16px;
        font-weight: 500;
    }
`;

const Home = () => {
    // const {counter} = useContext(CounterContext)
    const { counter } =  useCounterContext()

    const {color, dispatch} = useTitleColorContext();

    // 6 - alterando o contexto
    const setTitleColor = (color) => {
        dispatch({ type:color })
    }

    return (
    <>
    <Container>
        <h1 style={{color:color}}>Home</h1>
        <p>valor do context : {counter}</p>
        <ChangeCounter/>
        {/* alterando contexto */}
        <div>
            <button onClick={() => setTitleColor("RED")}>Vermelho</button>
            <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur veritatis laboriosam sequi ducimus animi vitae rerum ratione reiciendis quas?</p>
    </Container>
    </>
    )
}

export default Home
