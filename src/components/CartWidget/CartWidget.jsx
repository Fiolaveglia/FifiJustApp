import './CartWidget.css'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const {obtenerCantidad} = useContext(CartContext)

    const cantidad = obtenerCantidad()

    return (
        <div className='CartWidget'>
            <img src='../cart-shopping-solid.svg' className='Cart' alt="cart"></img>
            <span className='Quantity'>{cantidad === 0 ? '' : cantidad}</span>
        </div>
    )
}

export default CartWidget
