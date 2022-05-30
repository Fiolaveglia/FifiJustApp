import './ItemCard.css'
import Card from 'react-bootstrap/Card';
import Buttons from '../Buttons/Buttons';


function ItemCard (props) {
    
    
    return (
        <Card key={props.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} alt={props.nombre} />
            <Card.Body>
                <Card.Title><h3>Aceite de {props.nombre}</h3></Card.Title>
            </Card.Body>
            <Buttons class = "DetailButton" text="Ver detalle"/>
        </Card>
    )
}

export default ItemCard;