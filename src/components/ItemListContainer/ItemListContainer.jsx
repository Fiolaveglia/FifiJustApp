import './ItemListContainer.css'
import customFetch from '../Productos/CustomFetch'
import Productos from '../Productos/Productos'  
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState ([]); 
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect (() => {
        if (!categoryId) {
            customFetch(1000, Productos)
        .then(resp => setItems(resp))
        } else {
            customFetch(1000, Productos)
            .then(resp => setItems(resp.filter(p => p.categoria === categoryId)))
    
        }
        
    }, [categoryId]);


    return (
    <div>
        <div className='CardContainer'>
            <ItemList productos = {items} />
        </div>
    </div>)
}

export default ItemListContainer