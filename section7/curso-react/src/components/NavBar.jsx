import './NavBar.css'
import { Link,NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            {/* Esse é o motivo do css, .active */}
            <NavLink to="/"
            // className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}
            >Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default NavBar
