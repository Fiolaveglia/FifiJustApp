import {createContext, useState} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarItem = (productoParaAgregar) => {
        /* Funcion que verifica si el producto se encuentra en el carrito, si lo encuentra le suma la cantidad, sino lo agrega*/
        if (!estaEnCarrito (productoParaAgregar.id)) {
            setCarrito([...carrito, productoParaAgregar])
        } else {
            const newCarrito = carrito.map(p => {
                if (p.id === productoParaAgregar.id) {
                    const newProducto = {
                        ...p, cantidad : productoParaAgregar.cantidad
                    }
                    return newProducto
                } else {
                    return p
                }
            })
            setCarrito(newCarrito)
        }
    }

    const estaEnCarrito = (id) => {
        return carrito.some(p => p.id === id)
    }

    const obtenerCantidad = () => {
        let suma = 0
        carrito.forEach(p => {
            suma += p.cantidad 
        })
        return suma 
    }

    const obtenerCantidadProducto = (id) => {
        const producto = carrito.find (p => p.id === id)
        return producto ? producto.cantidad : 0
    }

    const eliminarProducto = (id) => {
        const newCarrito = carrito.filter(p => p.id !== id)
        setCarrito(newCarrito)
    }

    const limpiarCarrito = () => {
        const newCarrito = []
        setCarrito(newCarrito)
    }

    const sumaTotal = () => {
        let total = 0 
        carrito.forEach (p => {
            total += p.cantidad * p.precio
        })
        return total 
    }

    return (
        <CartContext.Provider value = {{carrito, agregarItem, obtenerCantidad, obtenerCantidadProducto, eliminarProducto, limpiarCarrito, sumaTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
