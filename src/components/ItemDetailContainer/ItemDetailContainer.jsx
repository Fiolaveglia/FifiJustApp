import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Productos from '../Productos/Productos'
import customFetch from '../Productos/CustomFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemListContainer/ItemListContainer.css'


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams ()

    useEffect(() => {
        customFetch(2000, Productos)
        .then(resp => setDetalle(resp.find(p => p.id === productId)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))        

    }, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }


    
    return (
        <div className='CardContainer'>
            {<ItemDetail {...detalle}/> }
        </div>
    )
}

export default ItemDetailContainer