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
            : <div className='container'>
                <h2>Detalle de compra</h2>
                <div className='detail border-top '>
                    { 
                        carrito.map (p => {
                        return (
                        <div className="columns row justify-content-between align-items-center border-bottom " key={p.id}>
                            <img className='col-xl-1 img-fluid ' src={p.img} alt= {p.nombre}/>
                            <p className='col-xl-2 col-6 mt-4 ps-4 fw-semibold'>Aceite de {p.nombre}</p>
                            <p className='col-xl-2 col-6 mt-4 text-end pe-4 fw-semibold'> $ {p.precio}</p>
                            <p className='col-xl-2 col-6 ps-4 me-0 pe-0'>Cantidad: {p.cantidad}</p>
                            <div className='col-xl-2 col-4 d-flex justify-content-end p-0'>
                                <button className="remove-product m-3" onClick={() => eliminarProducto(p.id)}>
                                    Eliminar
                                </button> 
                            </div>
                            <p className='col-xl-1 m-0 col-md-6 h5 d-none d-sm-block'>$ {p.precio * p.cantidad}</p>
                        </div>
                            )} 
                        )
                    }
                <div>
                    <p className='total-price text-end m-3 fw-bold h4'>Total ${sumaTotal()}</p>
                </div>
                    
                </div>
                <div className='row botones d-flex justify-content-center'>
                    <button className='btn btn-primary col-10 m-3' onClick={() => limpiarCarrito()} style={{margin: '20px'}}>Vaciar carrito</button>
                    <Link to ='/' className='btn btn-primary col-10 m-3'  style={{margin: '20px'}}>Continuar comprando</Link>
                    <Link to ='/form' className='btn btn-primary col-10 m-3' style={{margin: '20px'}} >Finalizar compra</Link>
                </div>
        </div>
            }
        </>
    )    

}

export default Cart