import {Link} from 'react-router-dom'
import '../EmptyCart/EmptyCart.css'

const EmptyCart = () => {
    return (
        
        <div className="empty-cart">
            <h2>El carrito esta vacio</h2>
            <Link to='/' className='ButtonDetail'>Volver al sitio</Link>
        </div> 
    )
}

export default EmptyCart