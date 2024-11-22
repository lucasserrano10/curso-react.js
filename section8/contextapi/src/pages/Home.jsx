import styled from "styled-components"
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

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
    const {counter} = useContext(CounterContext)
    return (
    <>
    <Container>
        <h1>Home</h1>
        <p>valor do context : {counter}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur veritatis laboriosam sequi ducimus animi vitae rerum ratione reiciendis quas?</p>
    </Container>
    </>
    )
}

export default Home
