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
                <div className='detail container border-top '>
                    { 
                        carrito.map (p => {
                        return (
                        <div className="columns row justify-content-between align-items-center border-bottom " key={p.id}>
                            <img className='col-1 col-sm-6 img-fluid ' src={p.img} alt= {p.nombre}/>
                            <p className='col-2 col-md-6 m-0 '>Aceite de {p.nombre}</p>
                            <p className='col-2 col-md-6 m-0'> $ {p.precio}</p>
                            <p className='col-2 col-md-6 m-0'>Cantidad: {p.cantidad}</p>
                            <button className=" col-1 col-md-6 remove-product" onClick={() => eliminarProducto(p.id)}>
                                Eliminar
                            </button> 
                            <p className='col-1 m-0 col-md-6'>$ {p.precio * p.cantidad}</p>
                        </div>
                            )} 
                        )
                    }
                <div>
                    <h5 className='total-price text-end m-3'>Total ${sumaTotal()}</h5>
                </div>
                    
                </div>
                <div className='botones d-flex justify-content-center'>
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