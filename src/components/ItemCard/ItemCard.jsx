import './ItemCard.css'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function ItemCard (props) {
    
    return (
        <Card key={props.id} style={{ width: '18rem', boxSizing: 'content-box', boxShadow : '#66806A 0px 0px 10px 0px', borderRadius: '10px' }}>
            <Card.Img variant="top" className ="" src={props.img} alt={props.nombre} />
            <Card.Body>
                <Card.Title><h3>Aceite de {props.nombre}</h3></Card.Title>
            </Card.Body>
            <Link to={`/detail/${props.id}`} className='ButtonDetail' >Ver detalle</Link>
        </Card>
    )
}

export default ItemCard;