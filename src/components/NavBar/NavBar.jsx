import './NavBar.css'
import Buttons from '../Buttons/Buttons'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <img className="Logo" src= "./img/logo.png" alt="logo"></img>
                <Buttons class = 'ButtonNav' text='Floral' />
                <Buttons class='ButtonNav' text='Citricos'/>
                <Buttons class='ButtonNav' text='Herbales'/>
                <CartWidget cantidad = {8}/>
            </div>
            <h1>AROMATERAPIA</h1>
        </nav>
    )
}


export default NavBar