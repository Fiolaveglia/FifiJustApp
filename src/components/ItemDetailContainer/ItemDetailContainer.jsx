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
        return <h1>Loading...</h1>
    }


    
    return (
        <div className='CardContainer'>
            {detalle.length > 0 ? <ItemDetail {...detalle}/> : <h2> No hay productos</h2>}
        </div>
    )
}

export default ItemDetailContainer