import {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({inicial, stock, onAdd}) => {
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
            <div className='ItemCount'>
                <button className='ButtonCounter' onClick={decrement}>-</button>
                <span className='Quantity'>{count}</span>
                <button className='ButtonCounter' onClick={increment}>+</button>
                <button className='AddToCart' onClick={AgregarProducto}>Agregar al carrito</button>
            </div>
    )
}

export default ItemCount;
