import './ItemListContainer.css'
import customFetch from '../Productos/CustomFetch'
import Productos from '../Productos/Productos'  
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState ([]); 

    useEffect (() => {
        customFetch(2000, Productos)
        .then(resultado => setItems(resultado))
    }, [items]);

    console.log(items)

    return (
    <div>
        <h2>{props.greeting}</h2>
        <div className='CardContainer'>
            <ItemList productos = {items} />
        </div>
    </div>)
}

export default ItemListContainer