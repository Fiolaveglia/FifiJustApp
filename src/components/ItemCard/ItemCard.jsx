import './ItemCard.css'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function ItemCard (props) {
    
    return (
        <Card key={props.id} style={{ width: '18rem', boxSizing: 'content-box', boxShadow : '#66806A 0px 0px 7px 0px', borderRadius: '10px', margin: '20px', padding: '20px' }}>
            <Card.Img variant="top" src={props.img} alt={props.nombre} className='img-fluid' />
            <Card.Body>
                <Card.Title><h3>Aceite de {props.nombre}</h3></Card.Title>
            </Card.Body>
            <Link to={`/detail/${props.id}`} className='ButtonDetail' >Ver detalle</Link>
        </Card>
    )
}

export default ItemCard;