import {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({inicial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(inicial)
    
    const decrement = () => {
        setCount(count - 1)
        if (count <= inicial) {
            setCount(inicial)
        } 
    }

    const increment = () => {
        setCount(count + 1)
        if (count === stock) {
            setCount(stock)
        }
    }
    
    const AgregarProducto = () => {
        onAdd (count)
    }

    return (
            <div className='container mt-4'>
                <div className="row justify-content-center align-items-center ms-2">
                    <button className='ButtonCounter col-1' onClick={decrement}>-</button>
                    <span className='Quantity col-1'>{count}</span>
                    <button className='ButtonCounter col-1' onClick={increment}>+</button>
                    <button className='AddToCart' onClick={AgregarProducto}>Agregar al carrito</button>
                </div>
            </div>
    )
}

export default ItemCount;