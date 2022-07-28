import { useParams } from 'react-router-dom'
import { detalleProducto } from '../../services/Firebase/firebase';
import { useFirestore } from '../../hooks/useFirestore';
import { css } from "@emotion/react";
import { DotLoader} from "react-spinners";
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemListContainer/ItemListContainer.css'


const ItemDetailContainer = () => {

    const {productId} = useParams ()

    const {isLoading, data, error} = useFirestore(() => detalleProducto(productId), [productId])

    const override = css`
    display: block;
    margin: 20vh auto;
    `;

    if (isLoading) {
        return (
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
            {<ItemDetail {...data}/> }
        </div>
    )
}

export default ItemDetailContainer