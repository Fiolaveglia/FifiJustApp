import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";
import { obtenerProductos } from '../../services/Firebase/firebase';
import { useFirestore } from '../../hooks/useFirestore';

const ItemListContainer = () => {

    const {categoryId} = useParams()

    const {isLoading, data, error} = useFirestore(() =>  obtenerProductos(categoryId), [categoryId])
    
    const override = css`
                        display: block;
                        margin: 20vh auto;
                        `;

    if (isLoading) {
        return  (
        <div className="sweet-loading">
            <DotLoader loading={isLoading} color = {'#FFC286'} css={override} size={100} />
        </div>
        )
    }

    if(error) {
        return <h1>Ha ocurrido un error</h1>
    }

    return (
            <div>
                <h1>AROMATERAPIA</h1>
                <div className='CardContainer'>
                    {data.length > 0 ? <ItemList productos = {data} /> : <h2> No hay productos</h2>}
                </div>
            </div>)
}

export default ItemListContainer