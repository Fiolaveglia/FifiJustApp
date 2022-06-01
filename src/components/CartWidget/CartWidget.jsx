import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <div className='CartWidget'>
            <img src='./cart-shopping-solid.svg' className='Cart' alt="cart"></img>
            <span className='Quantity'>{props.cantidad}</span>
        </div>
    )
}

export default CartWidget

