import './ItemListContainer.css'
import customFetch from '../Productos/CustomFetch'
import Productos from '../Productos/Productos'  
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState ([]); 
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect (() => {
        if (!categoryId) {
            customFetch(2000, Productos)
            .then(resp => setItems(resp))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))        
        } else {
            customFetch(2000, Productos)
        .then(resp => setItems(resp.filter(p => p.categoria === categoryId)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))        
        }
        
    }, [categoryId]);

    if (loading) {
        return <h1>Cargando...</h1>
    }


    return (
    <div>
        <div className='CardContainer'>
            {items.length > 0 ? <ItemList productos = {items} /> : <h2> No hay productos</h2>}
        </div>
    </div>)
}

export default ItemListContainer