import './CartWidget.css'
import MaterialIcon from 'react-google-material-icons'

const CartWidget = (props) => {
    return (
        <div className='CartWidget'>
            <MaterialIcon icon="shopping_bag" size={32} />
            <span className='Quantity'>{props.cantidad}</span>
        </div>
    )
}

export default CartWidget

