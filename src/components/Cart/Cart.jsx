import {Link} from 'react-router-dom'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import EmptyCart from '../EmptyCart/EmptyCart'
import './Cart.css'

const Cart = () => {

    const {carrito, eliminarProducto, limpiarCarrito, obtenerCantidad, sumaTotal} = useContext(CartContext)

    const cant = obtenerCantidad()

    return (
        <>{cant === 0 
            ? <EmptyCart/>
            : <div>
                <h2>Detalle de compra</h2>
                <div className='detail container '>
                    { 
                        carrito.map (p => {
                        return (
                        <div className="columns row" key={p.id}>
                            <div className="product-image col-sm-6">
                                <img src={p.img} alt= {p.nombre}/>
                            </div>
                            <div className="product-title col-sm-6">Aceite de {p.nombre}</div>
                            <div className="product-price">$ {p.precio}</div>
                            <div className="product-quantity">
                                <span>Cantidad: {p.cantidad}</span>
                            </div>
                            <div className="product-removal">
                                <button className="remove-product" onClick={() => eliminarProducto(p.id)}>
                                    Eliminar
                                </button> 
                            </div>
                            <div className="product-line-price"><span>$ {p.precio * p.cantidad}</span></div>
                        </div>
                            )} 
                        )
                    }
                <div>
                    <h5 className='total-price'>Total ${sumaTotal()}</h5>
                </div>
                    
                </div>
                <div className='botones'>
                    <button className='ButtonDetail' onClick={() => limpiarCarrito()} style={{margin: '20px'}}>Vaciar carrito</button>
                    <Link to ='/' className='ButtonDetail'  style={{margin: '20px'}}>Continuar comprando</Link>
                    <Link to ='/form' className='ButtonDetail' style={{margin: '20px'}} >Finalizar compra</Link>
                </div>
        </div>
            }
        </>
    )    

}

export default Cart