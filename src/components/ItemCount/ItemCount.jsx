import {useState} from 'react'
import Buttons from '../Buttons/Buttons';
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
                <Buttons class='ButtonCounter' text='-' onClick={decrement} />
                <span className='Quantity'>{count}</span>
                <Buttons class='ButtonCounter' text='+' onClick={increment} />
                <Buttons class='AddToCart' text='Agregar al carrito' onClick={AgregarProducto} />
            </div>
    )
}

export default ItemCount;
