import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navbar container">
                <NavLink to = "/"><img className="Logo " src= "../img/logo.png" alt="logo"></img></NavLink>
                <NavLink to = "/category/Floral" className='ButtonNav' >Florales</NavLink>
                <NavLink to = "/category/Citrico" className='ButtonNav'>Citricos</NavLink>
                <NavLink to = "/category/Herbal" className='ButtonNav'>Herbales</NavLink>
                <NavLink to = "/cart"><CartWidget /></NavLink> 
        </nav>
    )
}


export default NavBar 