import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import '../ItemCard/ItemCard.css'

const ItemDetail = (props) => {
    
    const onAdd = (cant) => {
        console.log(`Se agregaron ${cant} de productos al carrito`)
    }
    
    return (
        <div>
            <h2>Detalle del producto</h2>
            <Card key={props.id} style={{ width: '35rem'}}>
                <Card.Img variant="top" className='card-img-item' src={props.img} alt={props.nombre} />
                <Card.Body>
                    <Card.Title><h3>Aceite de {props.nombre}</h3></Card.Title>
                    <Card.Text className="text-detail">
                        {props.detalle}
                    </Card.Text>
                    <ItemCount stock={props.stock} inicial={0} onAdd={onAdd}/>
                </Card.Body>
            </Card>
        </div>
    )

}

export default ItemDetail