import Card from 'react-bootstrap/Card'
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import CartContext from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import '../ItemCard/ItemCard.css'


const ItemDetail = ({id, nombre, precio, img, img_2, img_3, detalle, stock, categoria, edad}) => {

    const [cantidad, setCantidad] = useState(0)

    const {agregarItem, obtenerCantidadProducto} = useContext(CartContext)

    const valorInicial = obtenerCantidadProducto(id) 

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        agregarItem ({id, nombre, precio, img, cantidad, edad}) 
    }
    
    return (
        <div className='DetailContainer'>
            <h2>Detalle del producto</h2>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <Carousel variant="dark" fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt={nombre}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img_2}
                                    alt={nombre}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img_3}
                                    alt={nombre}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <Card className="detail-card" key={id}>
                            <Card.Body  className='card-size' style={{ margin: "25px" }}>
                                <h3>Aceite de {nombre}</h3>
                                <h4 className='mb-4'>{categoria}</h4>
                                <Card.Text className="text-detail mx-lg-4">
                                    {detalle}
                                </Card.Text>
                                <Card.Text className='mx-4 edad'>Edad recomendada: {edad}</Card.Text>
                                <Card.Text id='xs'className='mx-lg-4 mt-5 advertencia'>
                                    Los productos Just brindan una acción
                                    reconfortante y de bienestar. No reemplazan
                                    la recomendación calificada del médico y
                                    tampoco tienen intención de diagnosticar,
                                    aliviar, tratar o curar ninguna enfermedad.
                                    Son aceites de uso Dermatológicamente
                                    probados
                                </Card.Text>
                                {cantidad > 0 ? (<Link to="/cart" className="ButtonDetail Shop">Finalizar compra</Link> ) : (<ItemCount stock={stock} inicial={ valorInicial === 0 ? 1 : valorInicial} onAdd={onAdd} />)}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail