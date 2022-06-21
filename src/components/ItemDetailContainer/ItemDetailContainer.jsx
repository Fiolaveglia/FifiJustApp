import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/Firebase'
import { css } from "@emotion/react";
import { DotLoader} from "react-spinners";
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemListContainer/ItemListContainer.css'


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams ()

    const override = css`
    display: block;
    margin: 20vh auto;
    `;


    useEffect(() => {
        getDoc(doc(db, 'Productos',productId))
        .then(resp => {
            const producto = {id: resp.id, ...resp.data()}
            setDetalle(producto)
        }).catch(error => console.log(error))
        .finally(() => setLoading(false))    }, [productId])

    if (loading) {
        return (
            <div className="sweet-loading">
                <DotLoader loading={loading} color = {'#FFC286'} css={override} size={100} />
            </div>
            )
    }

    return (
        <div className='CardContainer'>
            {<ItemDetail {...detalle}/> }
        </div>
    )
}

export default ItemDetailContainer