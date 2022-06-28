import {useForm} from "react-hook-form";
import {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {addDoc, collection, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import {db} from '../../services/Firebase'
import { css } from "@emotion/react";
import { DotLoader} from "react-spinners";
import CartContext from '../../context/CartContext'
import swal from 'sweetalert';
import './Form.css'




const Formulario = () => {

    const [loading, setLoading] = useState(false)

    const override = css`
    display: block;
    margin: 20vh auto;
    `;

    const {register, formState: {errors}, handleSubmit} = useForm();

    const {carrito, sumaTotal, limpiarCarrito} = useContext(CartContext)

    const navegacion = useNavigate()

    const [datos, setDatos] = useState({
        nombre: '', 
        direccion: '', 
        tel: '', 
        email: '', 
    })

    const handleInputChange = (e) => {
        setDatos({ 
            ...datos, 
            [e.target.name] : e.target.value 
        })
    }

    const crearOrden = (e) => {
        setLoading(true)
        
        const ObjOrden = {
            cliente: datos,
            items: carrito,
            total: sumaTotal()
        }

        const ids = carrito.map(p => p.id); 

        const batch = writeBatch(db)

        const fueraStock = [];

        const collectionRef = collection(db, 'Productos'); 

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const cantidadProductos = carrito.find(p => p.id === doc.id)?.cantidad

                if (dataDoc.stock >= cantidadProductos) {
                    batch.update(doc.ref, {stock: dataDoc.stock - cantidadProductos})
                } else {
                    fueraStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(fueraStock.length === 0) {
                const collectionRef = collection(db, 'ordenes')
                return addDoc(collectionRef, ObjOrden)
            } else {
                return Promise.reject({type: 'fuera_de_stock', Productos: fueraStock })
            }
        }).then(({id}) => {
            batch.commit(); 
            limpiarCarrito(); 
            swal( `Gracias por tu compra ${datos.nombre}`, `Se creó la orden con el id Nº ${id}`, "success");
            navegacion('/')
        }).catch(error => {
            swal( 'Error', 'No quedan tantas unidades como solicitaste', "error");
            limpiarCarrito(); 
            navegacion('/');
        }).finally(() => {
            setLoading(false)
        })
    }

    if (loading) {
        return  (
        <div className="sweet-loading">
            <DotLoader loading={loading} color = {'#FFC286'} css={override} size={100} />
        </div>
        )
    }

    return (
        <div className="container">
            <h2>Orden de compra</h2>
            <form onSubmit={handleSubmit(crearOrden)}>
                <label>Nombre completo</label>
                    <input 
                        type='text' 
                        name='nombre' 
                        placeholder='Escribe tu nombre' 
                        className='form-control mb-2'
                        {...register('nombre', {required: true, maxLenght: 20})}
                        onChange={handleInputChange}
                        value={datos.nombre}
                    />
                    {errors.nombre?.type === 'required' && <p className="text-danger" style={{fontSize:"12px"}}>Campo requerido</p>}
                <label>Direccion</label>
                    <input 
                        type='text' 
                        name='direccion' 
                        placeholder='Escribe tu direccion' 
                        className='form-control mb-2' 
                        {...register('direccion', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.direccion}
                    />
                    {errors.direccion?.type === 'required' && <p className="text-danger" style={{fontSize:"12px"}}>Campo requerido</p>}
                <label>Telefono</label>
                    <input 
                        type='tel' 
                        name='tel' 
                        placeholder='09xxxxxxx' 
                        pattern="[0-9]+"
                        className='form-control mb-2' 
                        {...register('tel', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.tel}
                    />
                    {errors.tel?.type === 'required' && <p className="text-danger" style={{fontSize:"12px"}}>Campo requerido</p>}
                <label>Correo electronico</label>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='ejemplo@mail.com' 
                        className='form-control mb-2'
                        {...register('email', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.email}
                    />
                    {errors.email?.type === 'required' && <p className="text-danger" style={{fontSize:"12px"}}>Campo requerido</p>}
                <button  type='submit' className='ButtonDetail' style={{width: '150px', display: 'block', margin: '0 auto'}}>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario

