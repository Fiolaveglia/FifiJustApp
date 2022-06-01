import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <Link to="/"><img className="Logo" src= "../img/logo.png" alt="logo"></img></Link>
                <Link to = "/category/floral" className='ButtonNav' >Florales</Link>
                <Link to = "/category/citrico" className='ButtonNav'>Citricos</Link>
                <Link to = "/category/herbal" className='ButtonNav'>Herbales</Link>
                <CartWidget cantidad = {8}/>
            </div>
            <h1>AROMATERAPIA</h1>
        </nav>
    )
}


export default NavBar 