import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { css } from "@emotion/react";
import { DotLoader} from "react-spinners";
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/Firebase'


const ItemListContainer = (props) => {
    
    const [items, setItems] = useState ([]); 
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    const override = css`
                        display: block;
                        margin: 20vh auto;
                        `;

    useEffect (() => {
        const collectionRef = categoryId
        ? query(collection(db, 'Productos'), where('categoria', '==', categoryId))
        : collection(db, 'Productos')
    
    getDocs(collectionRef)
        .then(resp => {
            const Products = resp.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setItems(Products)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))         
    }, [categoryId]);

    if (loading) {
        return  (
        <div className="sweet-loading">
            <DotLoader loading={loading} color = {'#FFC286'} css={override} size={100} />
        </div>
        )
    }


    return (
            <div>
                <div className='CardContainer'>
                    {items.length > 0 ? <ItemList productos = {items} /> : <h2> No hay productos</h2>}
                </div>
            </div>)
}

export default ItemListContainer