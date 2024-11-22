import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 10vh;
    box-shadow: 2px 2px 2px black;

    ul{
        display: flex;
        flex-direction:row;
        justify-content:flex-start;
        gap: 20px ;
        list-style: none;
        padding: 20px;
    }
`;

const StyledLink = styled(Link)`
    font-size: 24px;
    font-weight: 600;
`;

const NavBar = () => {
    return (
    <>
        <Nav>
            <ul>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/about">About</StyledLink>
                </li>
                <li>
                    <StyledLink to="/contact">Contact</StyledLink>
                </li>
            </ul>
        </Nav>
    </>
    )
}

export default NavBar
