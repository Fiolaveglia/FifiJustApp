import {useState, useEffect} from 'react'
import Productos from '../Productos/Productos'
import customFetch from '../Productos/CustomFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemListContainer/ItemListContainer.css'


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})

    useEffect(() => {
        customFetch(1000, Productos)
        .then(resp => setDetalle(resp.find(p => p.id === "1")))
    }, [detalle])

    console.log(detalle) 

    return (
        <div className='CardContainer'>
            <ItemDetail detalle = {detalle} />
        </div>
    )
}

export default ItemDetailContainer