import Card from 'react-bootstrap/Card'
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import '../ItemCard/ItemCard.css'


const ItemDetail = ({id, nombre, precio, img, detalle, stock, categoria}) => {

    const [cantidad, setCantidad] = useState(0)

    const {agregarItem, obtenerCantidadProducto} = useContext(CartContext)

    const valorInicial = obtenerCantidadProducto(id) 

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        agregarItem ({id, nombre, precio, img, cantidad}) 
    }
    
    return (
        <div>
            <h2>Detalle del producto</h2>
            <Card className='detail-card row'key={id} style={{ width: '35rem'}}>
                <Card.Img variant="top" className='card-img-item col-6' src={img} alt={nombre} />
                <Card.Body className='col-6'>
                    <h3>Aceite de {nombre}</h3>
                    <h4>{categoria}</h4>
                    <Card.Text className="text-detail">
                        {detalle}
                    </Card.Text>
                    {cantidad > 0 ? <Link to='/cart' className='ButtonDetail Shop'>Finalizar compra</Link> : <ItemCount stock={stock} inicial={valorInicial === 0 ? 1 : valorInicial} onAdd={onAdd}/>}
                </Card.Body>
            </Card>
        </div>
    )
}
export default ItemDetail