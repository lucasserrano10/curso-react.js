import styled from "styled-components"

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

const About = () => {
    return (
    <>
    <Container>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur veritatis laboriosam sequi ducimus animi vitae rerum ratione reiciendis quas?</p>
    </Container>
    </>
    )
}

export default About